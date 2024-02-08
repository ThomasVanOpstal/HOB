'use client'
import AboutMe from '@/components/AboutMe'
import Gallery from '@/components/Gallery'
import Nav from '@/components/Nav'
import Slider from '@/components/ui/Slider'
import { image } from '@/types/type'
import LandingPage from './LandingPage'
import { Metadata } from 'next'

const page = () => {
  const images: image[] = [
    {
      name: 'Skin',
      url: '/face_vhgkdo.png',
      alt: 'gezicht',
      bg: 'bg-brokenWhite',
      w: 150,
      h: 150,
    },
    {
      name: 'Beauty',
      url: '/hand_igki2c.png',
      alt: 'hand',
      bg: 'bg-darkBrown',
      w: 180,
      h: 180,
    },
    {
      name: 'Body',
      url: '/body_wthv6n.png',
      alt: 'lichaam',
      bg: 'bg-pink',
      w: 100,
      h: 100,
    },
  ]
  return (
    <>
      <div className="bg-pink">
        <Nav />
        <LandingPage />
      </div>
      <div id="services">
        <Slider
          className="smd:hidden"
          images={images}
          buttonAvailable={true}
          progressBarAvailable={true}
          cloudinary={true}
          showTitel={true}
        />
        <Gallery className="hidden smd:inline-flex" />
      </div>
      <div className="bg-brokenPink flex justify-center items-center">
        <AboutMe />
      </div>
    </>
  )
}

export default page
