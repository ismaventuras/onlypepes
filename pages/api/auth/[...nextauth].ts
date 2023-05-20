import NextAuth, { AuthOptions, Session } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import DiscordProvider from "next-auth/providers/discord"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/app/lib/prisma"
import { getUserBookmarks } from "@/app/actions/getUserBookmarks"



export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID || "",
            clientSecret: process.env.DISCORD_CLIENT_SECRET || ""
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    callbacks:{
        async session({session,user,token}) {
            try {
                const dbUser = await getUserBookmarks(user.id)
                const newUser = {...user, bookmarks: dbUser?.bookmarks || []}
                
                return {...session,user:newUser}                
            } catch (error) {
                console.error(error)
                return session
            }
        },
    }
}

const handler = NextAuth(authOptions)

export default handler