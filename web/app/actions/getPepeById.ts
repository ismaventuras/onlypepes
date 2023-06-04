import prisma from "../lib/prisma";

export async function getPepeById(id: number) {
    try {
        return await prisma.pepe.findUniqueOrThrow({
            where: {
                id
            }
        })        
    } catch (error) {
        return null
    }
}