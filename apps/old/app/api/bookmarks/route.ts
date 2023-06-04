import { getBookmarks } from "@/app/actions/getBookmarks";
import getUserBySession from "@/app/actions/getUserBySession";
import toogleBookmark from "@/app/actions/toogleBookmark";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const currentUser = await getUserBySession()
    const body = await request.json();
    if (!currentUser || !body.pepeId) {
        return NextResponse.error()
    }

    const ok = await toogleBookmark(currentUser.email!, body.pepeId)
    if (!ok) return NextResponse.error()

    return NextResponse.json({ result: true })
}

export async function GET(request: Request) {
    const currentUser = await getUserBySession()    
    if (!currentUser) {
        return NextResponse.error()
    }

    const bookmarks = await getBookmarks(currentUser.email!)
    if (!bookmarks) return NextResponse.error()

    return NextResponse.json({ result:bookmarks })
}

