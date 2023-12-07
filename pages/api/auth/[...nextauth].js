import NextAuth from "next-auth"

import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      secret: process.env.NEXT_PUBLIC_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET // To be added
}

export default NextAuth(authOptions)