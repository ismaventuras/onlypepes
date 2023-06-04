import prisma from "@/app/lib/prisma";

export default async function addBokmark(userId: string, pepeId: number) {
    try {
        await prisma.user.update({
            where: {
                id:userId
            },
            data: {
                bookmarks: {
                    connect: {
                        id: pepeId
                    }
                }
            }
        })
        return true
    } catch (error) {
        return null
    }
}