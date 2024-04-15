import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt-ts';
import { getUser } from './db';
import { authConfig } from './auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize({ email, password }: any) {
        let user = await getUser(email);
        if (user.length === 0) return null;
        let passwordsMatch = await compare(password, user[0].password!);
        if (passwordsMatch) return user[0] as any;
      },
    }),
  ],
});

{/*import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string
    })
  ],
  pages: {
    signIn: '/sign-in'
  }
});*/}
