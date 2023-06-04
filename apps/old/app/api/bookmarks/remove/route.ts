import getUserBySession from "@/app/actions/getUserBySession";
import removeBookmark from "@/app/actions/removeBookmark";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const currentUser = await getUserBySession()
    const body = await request.json();
    if (!currentUser || !body.pepeId) {
        return NextResponse.error()
    }

    const ok = await removeBookmark(currentUser.id, body.pepeId)
    if (!ok) return NextResponse.error()

    return NextResponse.json({ result: true })

}

