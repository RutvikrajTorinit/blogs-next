import { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "910569886748-76t6phqr7qteoe0gd4ua4rlv0dgnf51o.apps.googleusercontent.com",
      clientSecret: "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"
    })
  ],
  pages: {
    signIn: "/login"
  }
};
