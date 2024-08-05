import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from '@/utils/supabase/server';

const supabase = createClient();

export const authOptions:NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                username:{label:"Username",type:"text"},
                password:{label:"Password",type:"password"},
            },
            async authorize(credentials){

                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                const {data,error} = await supabase
                .from('user')
                .select()
                .single();
                
                if (error || !data) {
                    return null; // User not found or error occurred
                }
                
                return {
                    id: data?.id,
                    name: data?.name,
                    email: data?.email,
                    image: data?.image, // Optional: include user image if available
                  };
            }
        })
    ]
}