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
export async function getRandomizedPepes() {
    function shuffle<T>(array: T[]): T[] {
        let currentIndex = array.length;
        let temporaryValue: T;
        let randomIndex: number;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    const pepes = await prisma.pepe.findMany({
        orderBy: [
            {
                id: 'desc'
            }
        ]
    })
    return shuffle(pepes)

}

export async function getPepeById(id: number) {
    return await prisma.pepe.findFirst({
        where: {
            id
        }
    })
}