import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from '@/utils/supabase/server';
import {compare,hash} from 'bcryptjs'
import jwt from 'jsonwebtoken';
import { timeStamp } from "console";

export const authOptions:NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                username:{label:"Username",type:"text"},
                password:{label:"Password",type:"password"},
            },
            async authorize(credentials){
                const supabase = await createClient();
                
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }
                
                const {data,error} = await supabase
                .from('users')
                .select('*')
                .eq('username',credentials.username)
                .single();

                console.log("Supabase query result:", { data, error });
                if (error || !data) {
                    console.error("Error fetching user or user not found:", error?.message);
                    return null;
                }
                
                const isValidPassword = await compare(credentials.password,data.password);
                
                if(!isValidPassword){
                    return null
                }

                const generateToken = jwt.sign(
                    {userName : data.username},
                    process.env.JWT_SIGN_TOKEN_UNIQUES as string,
                    {expiresIn:'12h'}
                )
                const timeStamp = new Date().toISOString();
                const {error:tokenError} = await supabase
                    .from('users_token')
                    .insert([{user_id:data.id,token:generateToken,created_at:timeStamp}])

                if (tokenError){
                    console.error('Error Storing Token ',tokenError)
                }

                return { 
                    id: data.id,
                    username:data.username,
                    name:data.name,
                    email:data.email,
                    generateToken
                  };
            }
        })
    ],
    session:{
        strategy:"jwt"
    },
    callbacks:{
        
        async jwt({token,user}){
            const supabase = await createClient();
            if(user){
                token.id = user.id,
                token.name = user.name,
                token.email = user.email
            }
            return token
        },
        async session({ session, token }) {
            const supabase = await createClient();
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.name = token.name;
            return session;
          },
    }
}