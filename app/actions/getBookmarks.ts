import prisma from "../lib/prisma";

export async function getBookmarks(email:string){
    try {
        return await prisma.user.findUnique({
            where: {email},
            select: {bookmarks:true}
        })    
    } catch (error) {
        return null
    }
}