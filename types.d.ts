import { DefaultUser, DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    accessToken?: string;
    username?:string;
  }

  interface Session extends DefaultSession {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
