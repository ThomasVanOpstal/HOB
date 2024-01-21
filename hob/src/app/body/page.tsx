'use client'
import ImageGallery from '@/components/ui/ImageGallery'
import Socials from '@/components/ui/Socials'
import { cn } from '@/lib/utils'
import { ChevronDown, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MutableRefObject, useRef } from 'react'
import { trpc } from '../_trpc/client'
import { image } from '@/types/type'
import { CldImage } from 'next-cloudinary'
const page = () => {
  const galleryImages = trpc.getImages.useQuery(
    { folder: 'Body' },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  )
  const images = galleryImages.data as image[]
  const serviceCatagory = trpc.getServiceByCategory.useQuery({
    Category: 'Body',
  })
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
        <div className="flex flex-col items-center bg-pink">
          <div className="w-[250px] msm:w-[450px] md:w-[800px] desktop:w-[920px] flex flex-col msm:flex-row items-center justify-center md:justify-normal flex-shrink-0 mb-12">
            <div className="md:basis-2/3 md:flex md:justify-center">
              <p className="font-medium text-3xl msm:text-4xl smd:text-6xl desktop:text-7xl mx-auto md:pl-2">
                Laat je lichaam <br />
                stralen!
              </p>
            </div>
            <div className="md:basis-1/3 mt-4 ">
              <Image
                src={'/body.png'}
                width="175"
                height="175"
                alt={'Tekening van een gezicht'}
                sizes="(max-width: 150px) 33vw"
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
                            : 'text-pink hover:text-black'
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
              <div className="flex-grow flex flex-col justify-center items-center flex-shrink-0 hover:-translate-y-2 transition-transform">
                <Link href={'/body/massage'}>
                  <CldImage
                    src={'Body/beauty-spa_b804f9.jpg'}
                    width="300"
                    height="300"
                    alt={'Ontspannende foto'}
                    className="my-2 self-center rounded-md"
                  />
                  <p className="font-medium text-lg text-black text-center">
                    Massage
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex flex-col justify-center items-center py-8 hidden bg-green">
          <h1 className="font-medium mb-2 text-3xl ">Onze Beauties</h1>
          <div className="mb-4">
            <Socials />
          </div>
          {galleryImages.isLoading ? (
            <div className="min-h-[300px] flex flex-col gap-2 items-center justify-center">
              <div className="animate-pulse">
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
