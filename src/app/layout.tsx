import Navbar from "./components/navbar"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar/>
        
        {children}
        </body>
    </html>
  )
}
/* this navbar will appear in the website  no matter what page you go   for more explanation use chat gpt */