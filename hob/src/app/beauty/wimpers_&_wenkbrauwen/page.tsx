'use client'
import { trpc } from '@/app/_trpc/client'
import AltPricing from '@/components/AltPricing'
import Pricing from '@/components/Pricing'
import ImageGallery from '@/components/ui/ImageGallery'
import Slider from '@/components/ui/Slider'
import SliderPricing from '@/components/ui/SliderPricing'
import Socials from '@/components/ui/Socials'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { image } from '@/types/type'
import { Heart } from 'lucide-react'
import { Metadata } from 'next'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MutableRefObject, useRef } from 'react'

const page = () => {
  const galleryImages = trpc.getImages.useQuery({ folder: 'Beauty' })
  const services = trpc.getAllServices.useQuery()
  const service = trpc.getServices.useQuery({
    Service: 'Wimpers & wenkbrauwen',
  })
  if (service.status === 'success' && service.data) {
    const servicesData = service.data // Access the actual data
  } else if (service.status === 'error') {
  }
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const priceRef = useRef(null)
  const scrollToSection = (ref: MutableRefObject<null | any>) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: 'smooth',
    })
  }
  //const serviceOptions = services.data?.Options.map((option) => option.Option)
  const images = galleryImages.data as image[]
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname()
  const pathnames = pathname.split('/')
  const options: string[] = []
  let option: string = ''
  pathnames.forEach((path, index) => {
    index == 0 ? (option = '/') : (option += path + '/')
    options.push(option)
  })

  const description = ['30 minuten', 'Wimpers & wenkbrauwen lakken']
  const price = 30
  const title = 'Wimpers & wenkbrauwen'
  const mobileImage: image = {
    name: 'Wimpers & wenkbrauwen lakken',
    url: 'Beauty/Eyelashes_treatment_nswst3.jpg',
    alt: 'Wimpers & wenkbrauwen',
    bg: 'bg-brokenWhite',
    w: 450,
    h: 450,
  }
  const desktopImage: image = {
    name: 'Wimpers & wenkbrauwen lakken',
    url: 'Beauty/Eyelashes_treatment_nswst3.jpg',
    alt: 'wimpers & wenkbrauwen',
    bg: 'bg-brokenWhite',
    w: 300,
    h: 300,
  }
  const pricingOption = {
    description: description,
    desktopImage: desktopImage,
    mobileImage: mobileImage,
    price: price,
    title: title,
  }

  return (
    <>
      <div className="flex flex-col desktop:flex-row bg-darkBrown desktop:pt-2 desktop:pb-3">
        <div className="desktop:basis-1/2 flex justify-center items-center">
          <CldImage
            src={'Beauty/eyelashes_rxjgqz.jpg'}
            width="400"
            height="400"
            alt="Wimpers en wenkbrauwen"
            priority
          />
        </div>
        <div className="mx-4 my-3 desktop:my-6 desktop:basis-1/2 flex flex-col justify-center items-center">
          <div className="self-start">
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
                      {(pathname = pathname.replaceAll('_', ' '))}
                    </span>
                  </span>
                )}{' '}
              </Link>
            ))}
          </div>
          <div>
            <h1 className="font-semibold text-3xl my-1  ">
              Op zoek naar een betoverende oogopslag?
            </h1>
            <p className="mb-2  font-normal lg:font-medium">
              Stel je voor: stralende ogen die de aandacht vangen, omlijst door
              perfect gedefinieerde wimpers en wenkbrauwen die een blijvende
              indruk achterlaten. Laat je betoveren door de magie van wimper- en
              wenkbrauwlakken, een unieke service die je ogen een
              onweerstaanbare allure geeft. Wimper- en wenkbrauwlakken is niet
              zomaar een schoonheidsbehandeling; het is een kunst die jouw
              natuurlijke schoonheid accentueert en versterkt.
            </p>
            <div className="flex flex-row gap-2 desktop:mb-0">
              <Button
                variant={'default'}
                className="font-medium text-lg"
                onClick={() => {
                  scrollToSection(priceRef)
                }}
              >
                Prijs
              </Button>
              <Link href={'/contact'}>
                <Button variant={'default'} className="font-medium text-lg">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-16" ref={priceRef}>
        <h1 className="font-medium text-3xl text-center mb-2 pt-4 ">Prijs</h1>
        <div className="flex items-center justify-center mb-4">
          <Socials />
        </div>
        {service.status === 'success' && service.data ? (
          <Pricing pricingOptions={service.data} />
        ) : (
          <Skeleton className="w-[250px] sm:w-[600px] h-[500px] m-auto my-4 shadow-lg " />
        )}
      </div>

      <div className="bg-brokenWhite flex flex-col sm:items-center sm:justify-center ">
        <h1 className="font-medium text-3xl my-4 text-center">
          Ontdek meer zoals dit{' '}
        </h1>

        <div className="mb-12 sm:hidden">
          {services.status === 'success' ? (
            <SliderPricing pricingOptions={services.data} />
          ) : (
            <Skeleton className="my-4 w-[250px] h-[500px] shadow-lg mx-auto" />
          )}
        </div>
        <div className="hidden mb-12 sm:flex sm:flex-row sm:flex-wrap sm:w-[80%] sm:justify-center sm:gap-2">
          {services.status === 'success' ? (
            services.data.map((pricingOption, index) => {
              const lowerCaseName = pricingOption.name.toLowerCase().trim()
              if (
                lowerCaseName !== pathnames.at(-1)?.toLowerCase().trim() &&
                index < 3
              ) {
                return <AltPricing key={index} pricingOptions={pricingOption} />
              } else {
                return null
              }
            })
          ) : (
            <div className="hidden mb-12 sm:flex sm:flex-row sm:flex-wrap sm:w-[80%] sm:justify-center sm:gap-2">
              <Skeleton className="my-4 w-[250px] h-[500px] shadow-lg gap-1 mx-auto" />
              <Skeleton className="my-4 w-[250px] h-[500px] shadow-lg gap-1 mx-auto" />
              <Skeleton className="my-4 w-[250px] h-[500px] shadow-lg gap-1 mx-auto" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default page
