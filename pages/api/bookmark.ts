import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/app/lib/prisma";


type ValidMethods = 'CREATE' | 'DELETE';


async function handleBookmark(email: string, pepeId: number, method: ValidMethods) {
    try {
        await prisma.user.update({
            where: {
                email,
            },
            data: {
                bookmarks: method === 'DELETE' ? {
                    disconnect: {
                        id: pepeId
                    }
                } : {
                    connect: {
                        id: pepeId
                    }
                }
            }
        })
        return true
    } catch (error) {
        console.error("handleBookmark", error);
        return false
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
        return res.status(401).json({
            error: "Unauthorized",
        })
    }

    if (req.method === 'POST') {
        const { pepeId, method } = req.body
        const ok = await handleBookmark(session.user.email!, pepeId, method)
        
        if (ok) {
            res.status(200).json({ result: true, method })
        } else {
            res.status(500).json({
                error: 'Internal server error'
            })
        }
    }
    else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}