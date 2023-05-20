'use client'
import { SessionProvider } from "next-auth/react";

export interface NextAuthContextProps {
    children: React.ReactNode;
}

export default function NextAuthContext({ children }: NextAuthContextProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}