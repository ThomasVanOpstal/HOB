import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

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
      <body className={lora.className}>{children}</body>
    </html>
  )
}
