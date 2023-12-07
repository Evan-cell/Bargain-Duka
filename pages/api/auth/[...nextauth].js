import NextAuth from "next-auth"

import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '697788592233-opeq0afh339rah1s53dpfrmoa4ip4eo5.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)