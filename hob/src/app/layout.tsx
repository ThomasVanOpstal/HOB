import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'

import Provider from '@/app/_trpc/Provider'
import Footer from '@/components/Footer'

const lora = Lora({ subsets: ['latin'], style: 'italic' })

export const metadata: Metadata = {
  title: {
    template: '%s | House of Beauty',
    default: 'House of Beauty',
    absolute: 'House of beauty',
  },
  category: 'Schoonheidssalon',
  description:
    'Ontdek premium lichaams- en huidverzorgingsdiensten bij House of Beauty. Deskundige behandelingen om je natuurlijke schoonheid te verbeteren en algeheel welzijn te bevorderen.',
  applicationName: 'House of Beauty',
  keywords: [
    'Pedicure',
    'Gelnagels',
    'Massage',
    'Dermaplanning',
    'Gelaatsverzorging',
    'Wenkbrauwen',
    'Wimpers',
    'Verzorging',
    'Lauren van opstal',
  ],
  creator: 'Thomas Van Opstal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'House of Beauty',
    description:
      'Ontdek premium lichaams- en huidverzorgingsdiensten bij House of Beauty. Deskundige behandelingen om je natuurlijke schoonheid te verbeteren en algeheel welzijn te bevorderen.',
    url: '/',
    siteName: 'House of Beauty',
    type: 'website',
    images: [
      {
        url: 'https://asset.cloudinary.com/dx0xnplkl/b588d3226e3cb123e9226d6d045450b1',
        width: 400,
        height: 400,
        alt: 'House of Beauty - body & skin care',
      },
      {
        url: 'https://asset.cloudinary.com/dx0xnplkl/c6a415612673c4f6af4572c9735b2dac',
        width: 400,
        height: 400,
        alt: 'House of Beauty - body & skin care',
      },
    ],
    locale: 'nl_BE',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/hand.png',
    shortcut: '/hand.png',
    apple: '/hand.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/hand.png',
    },
  },
  appleWebApp: {
    title: 'House of beauty',
    statusBarStyle: 'black-translucent',
  },
  metadataBase: new URL('https://HouseofBeautybyLauren.be'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('bg-pink', lora.className)}>
      <body className={lora.className}>
        <Provider>{children} </Provider>
        <Footer />
      </body>
    </html>
  )
}
