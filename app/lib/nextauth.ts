import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getNextAuthServerSession(){
    return await getServerSession(authOptions)
}