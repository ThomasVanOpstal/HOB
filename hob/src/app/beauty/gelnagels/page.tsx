'use client'
import { trpc } from '@/app/_trpc/client'
import AltPricing from '@/components/AltPricing'
import Options from '@/components/Options'
import SideGallery from '@/components/ui/SideGallery'
import Slider from '@/components/ui/Slider'
import SliderPricing from '@/components/ui/SliderPricing'
import Socials from '@/components/ui/Socials'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import SliderPictures from '@/components/ui/sliderPictures'
import { cn } from '@/lib/utils'
import { image } from '@/types/type'
import { Heart } from 'lucide-react'
import { Metadata } from 'next'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MutableRefObject, use, useEffect, useRef } from 'react'

const Page = () => {
  const galleryImages = trpc.getImages.useQuery(
    { folder: 'Beauty' },
    { enabled: false }
  )
  const services = trpc.getAllServices.useQuery(undefined, { enabled: false })
  const service = trpc.getServices.useQuery(
    { Service: 'Gelnagels' },
    { enabled: false }
  )
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
  const handleFunctions = () => {
    galleryImages.refetch()
    services.refetch()
    service.refetch()
  }
  useEffect(() => {
    handleFunctions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //const serviceOptions = services.data?.Options.map((option) => option.Option)
  // const images = galleryImages.data as image[]
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname()
  const pathnames = pathname.split('/')
  const options: string[] = []
  let option: string = ''
  pathnames.forEach((path, index) => {
    index == 0 ? (option = '/') : (option += path + '/')
    options.push(option)
  })
  const images: image[] = [
    {
      name: 'GelPolish',
      url: 'Beauty/gel_v1_wanv3w.jpg',
      alt: 'Gelnagels',
      w: 250,
      h: 250,
    },
    {
      name: 'GelPolish',
      url: 'Beauty/gel_v2_apripd.jpg',
      alt: 'Gelnagels',
      w: 250,
      h: 250,
    },
    {
      name: 'GelPolish',
      url: 'Beauty/gel_v3_poabqf.jpg',
      alt: 'Gelnagels',
      w: 250,
      h: 250,
    },
  ]
  return (
    <>
      <div className="flex flex-col desktop:flex-row bg-darkBrown desktop:pt-2">
        <div className="desktop:basis-1/2 flex desktop:justify-start desktop:items-center">
          <CldImage
            src={'Beauty/ybbtgbknstz9szd8opw3.png'}
            alt={'Gelakte nagels'}
            width={800}
            height={800}
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
              Wat zijn gelnagels?
            </h1>
            <p className="mb-2  font-normal lg:font-medium">
              Gelnagels zijn de ultieme manier om je nagels (handen en voeten)
              te transformeren tot ware kunstwerken! Met hun duurzaamheid,
              veelzijdigheid en schitterende uitstraling, zijn gelnagels de
              keuze voor iedereen die er altijd op zijn best uit wil zien.Of je
              nu op zoek bent naar een verfijnde en klassieke look of juist iets
              gewaagders wilt proberen, gelnagels bieden eindeloze mogelijkheden
              voor nagelkunst en blijven er perfect uitzien, waar je ook gaat.
              Transformeer je nagels en verwen jezelf met de prachtige wereld
              van gelnagels!
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
      <div>
        <div className="flex flex-col justify-center items-center py-8 pb-16  bg-green">
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
            <div>
              <div className="hidden mdd:block">
                <SideGallery images={images} />
              </div>

              <div className="block mdd:hidden">
                <SliderPictures images={images} className="block sm:hidden" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mb-12" ref={priceRef}>
        {service.status === 'success' && service.data ? (
          <Options service={service?.data} />
        ) : (
          <Skeleton className="w-[250px] lsm:w-[400px] sm:w-[800px] desktop:h-[600px] h-[400px] m-auto my-4 shadow-lg " />
        )}
      </div>
      <div className="bg-brokenWhite flex flex-col sm:items-center sm:justify-center ">
        <h1 className="font-medium text-3xl my-4 text-center">
          Ontdek meer zoals dit{' '}
        </h1>

        <div className="mb-12 sm:hidden">
          {services.status === 'success' ? (
            <SliderPricing
              pricingOptions={services.data}
              pathname={pathnames.at(-1)?.toLowerCase().trim()}
            />
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
                index < 4
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

export default Page
