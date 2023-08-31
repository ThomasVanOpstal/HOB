import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'

import Provider from '@/app/_trpc/Provider'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const lora = Lora({ subsets: ['latin'], style: 'italic' })

export const metadata: Metadata = {
  title: 'House of beauty',
  description: 'body and skin care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('bg-pink', lora.className)}>
      <body className={lora.className}>
        <Nav />
        <Provider>{children} </Provider>
        <Footer />
      </body>
    </html>
  )
}
