'use client'
import Image from 'next/image'
import { ChevronDown, Heart } from 'lucide-react'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MutableRefObject, useRef } from 'react'
import { cn } from '@/lib/utils'
import Nav from '@/components/Nav'
import Socials from '@/components/ui/Socials'
import ImageGallery from '@/components/ui/ImageGallery'
import { trpc } from '../_trpc/client'
import { image } from '@/types/type'
import { CldImage } from 'next-cloudinary'
const page = () => {
  const galleryImages = trpc.getImages.useQuery({ folder: 'Body' })
  const images = galleryImages.data as image[]
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const servicesSkin = useRef(null)
  const scrollToSection = (ref: MutableRefObject<null | any>) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: 'smooth',
    })
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname()
  const pathnames = pathname.split('/')
  const options: string[] = []
  let option: string = ''
  pathnames.forEach((path, index) => {
    index == 0 ? (option = '/') : (option += path + '/')
    options.push(option)
  })

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-darkBrown">
          <div className="w-[250px] msm:w-[450px] md:w-[800px] desktop:w-[920px] flex flex-col msm:flex-row items-center justify-center md:justify-normal flex-shrink-0 mb-12 mt-4">
            <div className="md:basis-2/3 md:flex md:justify-center">
              <p className="font-medium text-3xl msm:text-4xl smd:text-5xl desktop:text-7xl mx-auto md:pl-2">
                Jouw handen, <br />
                jouw kunstwerk!
              </p>
            </div>
            <div className="md:basis-1/3 mt-4">
              <Image
                src={'/hand.png'}
                width="300"
                height="300"
                alt={'Tekening van een gezicht'}
                className="md:mx-auto"
              />
            </div>
          </div>
          <ChevronDown
            size={30}
            className="top-5 animate-bounce mr-1"
            onClick={() => {
              scrollToSection(servicesSkin)
            }}
          />
        </div>
        <div className="relative bg-white flex flex-col" ref={servicesSkin}>
          <div className="flex flex-col items-center justify-center mb-12">
            <h5 className="font-medium mt-2 text-black">
              {pathnames[pathnames.length - 1]} care
            </h5>
            <div className="absolute top-[4%] xs:top-[5%] left-[5%] hidden xsm:flex xsm:flex-row ">
              {pathnames.map((pathname, index) => (
                <Link
                  href={{ pathname: options[index] }}
                  key={index}
                  className={cn(
                    'font-medium text-sm text-black',
                    index !== pathnames.length - 1 ? '' : ''
                  )}
                >
                  {pathname === '' ? (
                    'Home'
                  ) : (
                    <span>
                      &nbsp;{'>'}&nbsp;
                      <span
                        className={cn(
                          index !== pathnames.length - 1
                            ? 'hover:text-black'
                            : 'text-darkBrown hover:text-black'
                        )}
                      >
                        {pathname}
                      </span>
                    </span>
                  )}{' '}
                </Link>
              ))}
            </div>
            <h1 className="font-medium text-2xl mb-8 text-black">Overzicht</h1>
            <div className="flex flex-col smd:flex-row flex-wrap gap-5 smd:gap-0 smd:w-[750px]  ">
              <div className="basis-1/2 flex flex-col justify-end items-center flex-shrink-0 hover:-translate-y-2 transition-transform">
                <CldImage
                  src={'Beauty/pedicure_nb1la7.jpg'}
                  width="300"
                  height="300"
                  alt={'Pedicure'}
                  className="my-2 self-center rounded-md"
                />
                <p className="font-medium text-lg text-center text-black">
                  Gellak tenen
                </p>
              </div>
              <div className="basis-1/2 flex flex-col smd:self-end first-line:justify-items-end items-center flex-shrink-0 hover:-translate-y-2 transition-transform">
                <CldImage
                  src={'Beauty/gelak_ycxabk.jpg'}
                  width="200"
                  height="200"
                  alt={'Gelakte nagels'}
                  className="my-2 self-center rounded-md"
                />
                <p className="font-medium text-lg text-center text-black">
                  Pedicure & lakken
                </p>
              </div>
              <div className="flex-grow flex flex-col justify-center items-center flex-shrink-0 hover:-translate-y-2 transition-transform">
                <CldImage
                  src={'Beauty/eyelashes_rxjgqz.jpg'}
                  width="300"
                  height="300"
                  alt={'Gelakte wimpers en wenkbrauwen'}
                  className="my-2 self-center rounded-md"
                />
                <p className="font-medium text-lg text-center text-black">
                  Wimpers & wenkbrauwen lakken
                </p>
              </div>
              <div className="flex-grow flex flex-col justify-center items-center flex-shrink-0 hover:-translate-y-2 transition-transform">
                <Link href={'/beauty/gelnagels'}>
                  <CldImage
                    src={'Beauty/babyboom_picture_sm_rar3ld.png'}
                    width="300"
                    height="300"
                    alt={'Gelakte wimpers en wenkbrauwen'}
                    className="my-2 self-center rounded-md"
                  />
                  <p className="font-medium text-lg text-center text-black">
                    Gelnagels
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-8  bg-green">
          <h1 className="font-medium mb-2 text-3xl ">Onze Beauties</h1>
          <div className="mb-4">
            <Socials />
          </div>
          {galleryImages.isLoading ? (
            <div className="min-h-[300px] flex flex-col gap-2 items-center justify-center">
              <div className="animate-bounce">
                <Heart fill="red" color="red" size={75} />
              </div>
              <p>Loading...</p>
            </div>
          ) : (
            <ImageGallery images={images} />
          )}
        </div>
      </div>
    </>
  )
}

export default page
