import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      credentials: {
        userName: {},
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        console.log({ credentials });

        // const res = await fetch(
        //   `http://localhost:5000/user/${credentials?.email}`
        // );

        // const users = await res.json();

        // const passwordCorrect = await compare(
        //   credentials?.password || "",
        //   users.password
        // );

        // console.log({ passwordCorrect });

        // if (passwordCorrect) {
        //   return {
        //     id: users.id,
        //     email: users.email,
        //     userName: users.userName,
        //   };
        // }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
