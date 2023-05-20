import prisma from "../lib/prisma";

export async function getUserBookmarks(id:string){
    try {
        return await prisma.user.findUnique({
            where: {id},
            select: {bookmarks:true}
        })    
    } catch (error) {
        return null
    }
}