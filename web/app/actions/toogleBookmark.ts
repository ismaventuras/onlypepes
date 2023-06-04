import prisma from "@/app/lib/prisma";

export default async function toogleBookmark(email:string, pepeId:number){
    try {
        const existingBookmark = await prisma.pepe.findFirst({
            where:{
                id:pepeId,
                bookmarks:{
                    some:{
                        email
                    }
                }
            }
        });

        const action =  existingBookmark ? {
            disconnect:{
                id:pepeId
            }
        }: {
            connect:{
                id:pepeId
            }
        }
        await prisma.user.update({
            where:{
                email:email
            },
            data:{
                bookmarks:action
            }
        })
        return true
    } catch (error) {
        return null
    }
}