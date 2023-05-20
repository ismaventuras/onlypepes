import prisma from "@/app/lib/prisma";


export async function getUser(email: string) {
    try {
        return await prisma.user.findFirst({
            where: {
                email
            },
            include: {
                bookmarks: true
            }
        })
    } catch (error) {
        console.error("getUser", error);
        return null
    }
}