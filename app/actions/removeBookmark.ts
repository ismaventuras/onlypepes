import prisma from "@/app/lib/prisma";

export default async function removeBookmark(userId:string, pepeId:number){
    try {
        await prisma.user.update({
            where:{
                id:userId
            },
            data:{
                bookmarks:{
                    disconnect:{
                        id:pepeId
                    }
                }
            }
        })
        return true
    } catch (error) {
        return null
    }
}