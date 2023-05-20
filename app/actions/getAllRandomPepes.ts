import { Pepe } from "@prisma/client";
import prisma from "../lib/prisma";
import { shuffle } from "../lib/arrays";

export default async function getAllRandomPepes(): Promise<Pepe[]> {
    try {
        return shuffle(  await prisma.pepe.findMany({
            orderBy: [
                {
                    id: 'desc'
                },
            ],

        }));
    } catch (error) {
        return []
    }
}