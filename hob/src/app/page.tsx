'use client'
import Nav from '@/components/Nav'
import Slider from '@/components/ui/Slider'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
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
  return (
    <>
      <div className="bg-pink">
        <Nav />
        <div className="flex flex-col items-center justify-center bg-pink">
          <div className="max-w-[175px]">
            <h1 className="font-medium text-4xl">Nails & body care</h1>
            <h3 className="font-medium"> By lauren</h3>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src={'/humanHandL.png'}
              width="400"
              height="450"
              alt={'Hand met zeer verzorgde nagels'}
            />
            <ChevronDown
              size={30}
              className="absolute bottom-0 mr-1 animate-bounce"
              onClick={() => {
                scrollToSection(services)
              }}
            />
          </div>
        </div>
        <div ref={services}>
          <div className="flex flex-col">
            <Slider />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
