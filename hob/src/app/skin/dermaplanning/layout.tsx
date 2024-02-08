import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dermaplanning | House of Beauty',
  description:
    'Ontdek de geheime sleutel tot een zijdezachte en stralende huid met onze dermaplaning behandeling! Dermaplanning is dé ultieme methode om ongewenste donshaartjes en dode huidcellen zachtjes te verwijderen, waardoor je huid direct een verbluffend gladde en jeugdige uitstraling krijgt.',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dx0xnplkl/image/upload/v1699904592/Skin/dermatology_eeu7zy.jpg',
        width: 400,
        height: 400,
        alt: 'Dermaplanning | House of Beauty',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
