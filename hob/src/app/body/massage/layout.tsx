import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Massage | House of Beauty',
  description:
    'De beste schouder-, nek- en rugmassage kan je vinden bij House of Beauty. Wij zorgen ervoor dat je volledig ontspannen en verfrist naar huis gaat.',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dx0xnplkl/image/upload/v1699000808/Body/beauty-spa_b804f9.jpg',
        width: 400,
        height: 400,
        alt: 'Massage | House of Beauty',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
