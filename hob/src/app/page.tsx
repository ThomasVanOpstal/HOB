'use client'
import AboutMe from '@/components/AboutMe'
import Gallery from '@/components/Gallery'
import Nav from '@/components/Nav'
import Slider from '@/components/ui/Slider'
import { Button } from '@/components/ui/button'
import { image } from '@/types/type'
import { ChevronDown } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { MutableRefObject, useRef } from 'react'
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const services = useRef(null)
  const scrollToSection = (ref: MutableRefObject<null | any>) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: 'smooth',
    })
  }
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
        <div className="relative flex flex-col items-center justify-center lsm:justify-around lsm:items-end lsm:flex-row lsm:mx-auto lsm:max-w-[900px] bg-pink">
          <div className="max-w-[200px] lsm:basis-1/2 lsm:max-w-none lsm:flex lsm:flex-col lsm:self-start">
            <div className="sml:max-w-[200px] mx-auto grow">
              <h1 className="font-medium text-4xl msm:text-5xl sm:text-6xl md:text-7xl desktop:text-8xl">
                Nails & <br /> body care
              </h1>
              <h3 className="font-medium pl-4 lsm:pb-1"> By lauren</h3>
              <div className="mb-8 hidden smd:block ">
                <Button
                  variant="secondary"
                  className="font-medium text-xl ml-4 mt-2"
                  onClick={() => {
                    scrollToSection(services)
                  }}
                >
                  Aanbod
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline_darkBrown"
                    className="font-medium text-xl ml-4 mt-2 "
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-end basis-1/2">
            <CldImage
              src={'Beauty/manicure_khkilr.png'}
              width="400"
              height="400"
              alt={'Hand met zeer verzorgde nagels'}
              className="lsm:mr-8"
            />
            <ChevronDown
              size={30}
              className="absolute top-5 animate-bounce lsm:hidden"
              onClick={() => {
                scrollToSection(services)
              }}
            />
          </div>
          <ChevronDown
            size={30}
            className="animate-bounce absolute bottom-0 left-[47%] hidden lsm:block smd:hidden "
            id="chevronDown"
            onClick={() => {
              scrollToSection(services)
            }}
          />
        </div>
        <div ref={services}>
          <Slider
            className="smd:hidden"
            images={images}
            buttonAvailable={true}
            progressBarAvailable={true}
            cloudinary={true}
          />
          <Gallery className="hidden smd:inline-flex" />
        </div>
        <AboutMe />

        {/* <Footer /> */}
      </div>
    </>
  )
}

export default page
