import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CedarProvider from '@/providers/CedarProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Just Dance Clone',
  description: 'A simplified Just Dance game with pose detection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CedarProvider>{children}</CedarProvider>
      </body>
    </html>
  )
}
