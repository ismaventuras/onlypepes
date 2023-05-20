import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUser } from "@/app/actions/getUserWithookmarks";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method === 'POST') {
        const session = await getServerSession(req, res, authOptions)
        if (session) {
            const user = await getUser(session.user?.email!)
            if (user) {
                res.status(200).json({
                    bookmarks: user
                })
            } else {
                res.status(500).json({
                    error: 'Internal server error'
                })
            }

        } else {
            res.status(401).json({
                error: "No session",
            })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}