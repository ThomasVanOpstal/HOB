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
  // const galleryImages = trpc.getImages.useQuery({ folder: 'Body' })
  const services = trpc.getAllServices.useQuery()
  const service = trpc.getServices.useQuery({ Service: 'Gelaatsverzorging' })
  // const images = galleryImages.data as image[]
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const priceRef = useRef(null)
  const scrollToSection = (ref: MutableRefObject<null | any>) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: 'smooth',
    })
  }
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname()
  const pathnames = pathname.split('/')
  const options: string[] = []
  let option: string = ''
  pathnames.forEach((path, index) => {
    index == 0 ? (option = '/') : (option += path + '/')
    options.push(option)
  })

  const description = ['30 minuten', 'Gelaatsverzorging']
  const price = 30
  const title = 'Gelaatsverzorging'
  const mobileImage: image = {
    name: 'Gelaatsverzorging',
    url: 'Skin/woman-spa_fk7spy.jpg',
    alt: 'Gelaatsverzorging',
    bg: 'bg-brokenWhite',
    w: 450,
    h: 450,
  }
  const desktopImage: image = {
    name: 'Gelaatsverzorging',
    url: 'Skin/woman-spa_fk7spy.jpg',
    alt: 'Gelaatsverzorging',
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
      <div className="flex flex-col desktop:flex-row bg-brokenWhite desktop:py-6">
        <div className="basis-1/2 flex justify-center items-center">
          <CldImage
            src={'Skin/gelaatsverzorging_ubtxpa.jpg'}
            alt={'Gelaatsverzorging'}
            width={400}
            height={400}
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
                      {pathname}
                    </span>
                  </span>
                )}{' '}
              </Link>
            ))}
          </div>
          <div>
            <h1 className="font-semibold text-3xl my-1 ">
              Wat is een Gelaatsverzorging?
            </h1>
            <p className="mb-2 font-medium">
              Een gelaatsverzorging is een essentieel onderdeel van
              zelfverzorging en biedt een doeltreffende manier om de gezondheid
              en uitstraling van je huid te verbeteren. Het is een gerichte
              behandeling die is ontworpen om de huid van je gezicht te
              reinigen, te voeden en te revitaliseren. Of je nu last hebt van
              onzuiverheden, fijne lijntjes, droogheid of gewoon wilt genieten
              van een ontspannende ervaring, een professionele gelaatsverzorging
              kan aan al deze behoeften voldoen.
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

      <div className="bg-white sm:bg-green pb-16" ref={priceRef}>
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
      <div className="bg-brokenWhite flex flex-col sm:items-center sm:justify-center pb-12">
        <h1 className="font-medium text-3xl my-4 text-center">
          Ontdek meer zoals dit{' '}
        </h1>

        <div className="sm:hidden">
          {services.status === 'success' ? (
            <SliderPricing pricingOptions={services.data} />
          ) : (
            <Skeleton className="w-[250px] lsm:w-[400px] sm:w-[500px] desktop:h-[300px] h-[400px] m-auto my-4 shadow-lg " />
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
              <Skeleton className="my-4 w-[250px] h-[500px] shadow-lg mx-auto" />
              <Skeleton className="my-4 w-[250px] h-[500px] shadow-lg mx-auto" />
              <Skeleton className="my-4 w-[250px] h-[500px] shadow-lg mx-auto" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default page
