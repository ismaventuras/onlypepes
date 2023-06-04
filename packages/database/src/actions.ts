import { prisma } from './client';

export async function getAllPepes() {
    return await prisma.pepe.findMany({
        orderBy: [
            {
                id: 'desc'
            }
        ]
    })
}

export async function getPepeById(id: number) {
    return await prisma.pepe.findFirst({
        where: {
            id
        }
    })
}