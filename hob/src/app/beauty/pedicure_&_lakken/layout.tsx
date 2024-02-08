import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pedicure | House of Beauty',
  description:
    'Een pedicure is veel meer dan alleen het knippen van nagels en het verwijderen van eelt. Het is een op maat gemaakte ervaring die gericht is op het herstellen en verjongen van je voeten, waardoor je niet alleen letterlijk, maar ook figuurlijk op wolken loopt.',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dx0xnplkl/image/upload/v1705866463/Beauty/Pedicure_behandeling_ozuom9.jpg',
        width: 400,
        height: 400,
        alt: 'Pedicure | House of Beauty',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
