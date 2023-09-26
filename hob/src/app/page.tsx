'use client'
import AboutMe from '@/components/AboutMe'
import Gallery from '@/components/Gallery'
import Nav from '@/components/Nav'
import Slider from '@/components/ui/Slider'
import { Button } from '@/components/ui/button'
import { image } from '@/types/type'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { MutableRefObject, useRef } from 'react'
const page = async () => {
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
      url: '/face.png',
      alt: 'gezicht',
      bg: 'bg-brokenWhite',
      w: 150,
      h: 150,
    },
    {
      name: 'Beauty',
      url: '/hand.png',
      alt: 'hand',
      bg: 'bg-darkBrown',
      w: 180,
      h: 180,
    },
    {
      name: 'Body',
      url: '/body.png',
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
                >
                  Aanbod
                </Button>
                <Button
                  variant="outline_darkBrown"
                  className="font-medium text-xl ml-4 mt-2 "
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-end basis-1/2">
            <Image
              src={'/manicure.png'}
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
