import './globals.css'
import { Roboto_Mono, Montserrat } from 'next/font/google'
import Header from '@/app/components/Header'
import NextAuthContext from './context/NextAuthContext'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Onlypepes',
  description: 'Hot pepes in your zone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-slate-800 text-slate-200 container mx-auto max-w-6xl flex flex-col min-h-screen`}>
        <NextAuthContext>
          <Header/>
          <main className='p-2 flex-grow'>
            {children}
          </main>

        </NextAuthContext>
      </body>
    </html>
  )
}
