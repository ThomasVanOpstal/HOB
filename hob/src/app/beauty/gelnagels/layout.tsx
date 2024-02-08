import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gelnagels | House of Beauty',
  description:
    'Gelnagels zijn de ultieme manier om je nagels (handen en voeten) te transformeren tot ware kunstwerken! Met hun duurzaamheid, veelzijdigheid en schitterende uitstraling, zijn gelnagels de keuze voor iedereen die er altijd op zijn best uit wil zien.',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dx0xnplkl/image/upload/v1698700622/Beauty/urdrk5dq6b5byemfbvjy.png',
        width: 400,
        height: 400,
        alt: 'Gelnagels | House of Beauty',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
