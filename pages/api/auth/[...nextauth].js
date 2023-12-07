import NextAuth from "next-auth"

import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '697788592233-60bm9v3mngvsmls319r2pn1mhqvf3v0q.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)