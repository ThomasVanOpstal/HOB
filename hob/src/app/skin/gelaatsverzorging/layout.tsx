import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gelaatsverzorging | House of Beauty',
  description:
    'Een gelaatsverzorging is een essentieel onderdeel van zelfverzorging en biedt een doeltreffende manier om de gezondheid en uitstraling van je huid te verbeteren. Het is een gerichte behandeling die is ontworpen om de huid van je gezicht te   reinigen, te voeden en te revitaliseren.',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dx0xnplkl/image/upload/v1699904649/Skin/gelaatsverzorging_ubtxpa.jpg',
        width: 400,
        height: 400,
        alt: 'Gelaatsverzorging | House of Beauty',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
