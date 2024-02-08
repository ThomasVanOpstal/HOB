import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wimpers & wenkbrauwen | House of Beauty',
  description:
    'Stel je voor: stralende ogen die de aandacht vangen, omlijst door perfect gedefinieerde wimpers en wenkbrauwen die een blijvende indruk achterlaten. Laat je betoveren door de magie van wimper- en wenkbrauwlakken, een unieke service die je ogen een onweerstaanbare allure geeft.',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dx0xnplkl/image/upload/v1699904011/Beauty/eyelashes_rxjgqz.jpg',
        width: 400,
        height: 400,
        alt: 'Wimpers & wenkbrauwen lakken | House of Beauty',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
