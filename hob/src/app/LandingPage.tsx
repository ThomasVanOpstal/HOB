'use client'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

export default function LandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }
  return (
    <>
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
                  scrollToSection('services')
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
            width={400}
            height={400}
            alt={'Hand met zeer verzorgde nagels'}
            className="lsm:mr-8"
            priority
          />
          <ChevronDown
            size={30}
            className="absolute top-5 animate-bounce lsm:hidden"
            onClick={() => {
              scrollToSection('services')
            }}
          />
        </div>
        <ChevronDown
          size={30}
          className="animate-bounce absolute bottom-0 left-[47%] hidden lsm:block smd:hidden "
          id="chevronDown"
          onClick={() => {
            scrollToSection('services')
          }}
        />
      </div>
    </>
  )
}
