import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from '@/utils/supabase/server';
import {compare} from 'bcryptjs'
import jwt from 'jsonwebtoken';

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
                
                const {data:userData,error:userError} = await supabase
                .from('users')
                .select('*')
                .eq('username',credentials.username)
                .single();

                if (userError || !userData) {
                   throw new Error(userError?.message)
                }
                
                const isValidPassword = await compare(credentials.password,userData.password);
                
                if(!isValidPassword){
                    throw new Error("Invalid Password!")
                }

                const generateToken = jwt.sign(
                    {userName : userData.username},
                    process.env.JWT_SIGN_TOKEN_UNIQUES as string,
                    {expiresIn:'12h'}
                )
                const timeStamp = new Date().toISOString();
                
                const {data:check_token} = await supabase
                    .from('users_token')
                    .select('*')
                    .eq('users_id',userData.id)
                    .eq('is_active',1)
                    .single()

                if (check_token){
                    const {} = await supabase
                    .from('users_token')
                    .update([{is_active:0}])
                    .eq('users_id',userData.id)
                } 

                const {error:tokenError} = await supabase
                .from('users_token')
                .insert([{users_id:userData.id,is_active:1,token:generateToken,created_at:timeStamp}])

                if (tokenError){
                    throw new Error("Invalid Store Tokens")
                }

                return { 
                    id: userData.id,
                    username:userData.username,
                    name:userData.name,
                    email:userData.email,
                    generateToken
                  };
            }
        })
    ],
    session:{
        strategy:"jwt"
    },
    callbacks:{
        
        async session({ session, token }) {
            const supabase = await createClient();
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.name = token.name;
            return session;
          },
    }
}