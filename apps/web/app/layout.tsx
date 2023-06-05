import './globals.css'
import Header from './components/Header'
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

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
      <body className={`${robotoMono.className} container mx-auto bg-slate-800 text-slate-200 max-w-6xl`}>
        <Header/>        
        {children}
      </body>
    </html>
  )
}
