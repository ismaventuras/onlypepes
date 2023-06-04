import { getNextAuthServerSession } from "../lib/nextauth";
import prisma from "../lib/prisma";

export default async function getUserBySession() {
    try {
        const session = await getNextAuthServerSession()

        if (!session?.user.email) return null


        const currentUser = await prisma.user.findUniqueOrThrow({
            where: {
                email: session.user.email
            },
            include: {
                bookmarks: true
            }
        })

        return currentUser

    } catch (error) {
        return null
    }


}