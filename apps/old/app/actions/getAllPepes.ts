import { Pepe } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getAllPepes(): Promise<Pepe[]> {
    try {
        return await prisma.pepe.findMany({
            orderBy: [
                {
                    id: 'desc'
                },
            ],

        });
    } catch (error) {
        return []
    }
}