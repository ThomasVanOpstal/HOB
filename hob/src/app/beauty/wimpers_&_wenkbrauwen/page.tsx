'use client'
import { trpc } from '@/app/_trpc/client'
import AltPricing from '@/components/AltPricing'
import Options from '@/components/Options'
import Pricing from '@/components/Pricing'
import PricingManuel from '@/components/PricingManuel'
import ImageGallery from '@/components/ui/ImageGallery'
import Slider from '@/components/ui/Slider'
import SliderPricing from '@/components/ui/SliderPricing'
import Socials from '@/components/ui/Socials'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { SearchResult, image } from '@/types/type'
import { Heart } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
              <Button variant={'default'} className="font-medium text-lg">
                Prijs
              </Button>
              <Button variant={'default'} className="font-medium text-lg">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
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
            <div>
              <div className="hidden sm:block">
                <ImageGallery images={images} className="hidden sm:block" />
              </div>

              <div className="block sm:hidden">
                <Slider
                  images={images}
                  buttonAvailable={false}
                  className="block sm:hidden"
                  cloudinary={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mb-12 mt-12">
        {service.status === 'success' && service.data ? (
          <Pricing pricingOptions={service.data} />
        ) : (
          <Skeleton className="w-[250px] lsm:w-[400px] sm:w-[500px] desktop:h-[300px] h-[400px] m-auto my-4 shadow-lg " />
        )}
      </div>
      <div className="bg-brokenWhite flex flex-col sm:items-center sm:justify-center ">
        <h1 className="font-medium text-3xl my-4 text-center">
          Ontdek meer zoals dit{' '}
        </h1>

        <div className="mb-6 sm:hidden">
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
              console.log(pricingOption.name.toLowerCase())
              console.log(pathnames.at(-1)?.toLowerCase().trim())
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
