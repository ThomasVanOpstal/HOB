'use client'
import { trpc } from '@/app/_trpc/client'
import AltPricing from '@/components/AltPricing'
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
  const galleryImages = trpc.getImages.useQuery({ folder: 'Body' })
  const services = trpc.getAllServices.useQuery()
  const service = trpc.getServices.useQuery({ Service: 'Ontspannende massage' })
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

  const description = ['30 minuten', 'Ontspanning massage']
  const price = 30
  const title = 'Dermaplanning'
  const mobileImage: image = {
    name: 'Dermaplanning',
    url: 'Skin/Dermaplanning_treatment_juwxr8.jpg',
    alt: 'massage',
    bg: 'bg-brokenWhite',
    w: 450,
    h: 450,
  }
  const desktopImage: image = {
    name: 'Dermaplanning',
    url: 'v1705874721/Skin/Dermaplanning_treatment_juwxr8.jpg',
    alt: 'massage',
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
            src={'Skin/dermatology_eeu7zy.jpg'}
            alt={'dermaplanning'}
            width={400}
            height={400}
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
              Wat is Dermaplanning?
            </h1>
            <p className="mb-2 font-medium">
              Ontdek de geheime sleutel tot een zijdezachte en stralende huid
              met onze dermaplaning behandeling! Dermaplanning is dé ultieme
              methode om ongewenste donshaartjes en dode huidcellen zachtjes te
              verwijderen, waardoor je huid direct een verbluffend gladde en
              jeugdige uitstraling krijgt. Onze ervaren professionals gebruiken
              een veilig en precies scheermesje om de huid te exfoliëren en te
              verfrissen, zonder enige pijn of ongemak.
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
        <div className="sm:flex flex-col justify-center items-center py-8 hidden bg-green">
          <h1 className="font-medium mb-2 text-3xl ">Onze Beauties</h1>
          <div className="mb-4">
            <Socials />
          </div>
          {galleryImages.isLoading || images.length < 1 ? (
            <div className="min-h-[300px] flex flex-col gap-2 items-center justify-center">
              <div className="animate-bounce">
                <Heart fill="red" color="red" size={75} />
              </div>
              <p>Loading...</p>
            </div>
          ) : (
            <div>
              <ImageGallery images={images} className="hidden sm:block" />
              <Slider
                images={images}
                buttonAvailable={false}
                titel="Onze beauties"
                className="sm:hidden"
                cloudinary={true}
              />
            </div>
          )}
        </div>
      </div>
      <div className="mb-12">
        <h1 className="font-medium text-3xl text-center my-4 ">Prijs</h1>
        {service.status === 'success' && service.data ? (
          <PricingManuel pricingOption={pricingOption} />
        ) : (
          <div className="h-[500px]">loading</div>
        )}
      </div>
      <div className="bg-brokenWhite flex flex-col sm:items-center sm:justify-center ">
        <h1 className="font-medium text-3xl my-4 text-center">
          Ontdek meer zoals dit{' '}
        </h1>

        <div className="mb-6 sm:hidden h-[500px]">
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
                index < 4
              ) {
                return <AltPricing key={index} pricingOptions={pricingOption} />
              } else {
                return null
              }
            })
          ) : (
            <div className="hidden mb-12 sm:flex sm:flex-row sm:flex-wrap sm:w-[80%] sm:justify-center sm:gap-2">
              <Skeleton className="my-4 w-[250px] h-[500px] shadow-lg" />
              <Skeleton className="my-4 w-[250px] h-[500px] shadow-lg" />
              <Skeleton className="my-4 w-[250px] h-[500px] shadow-lg" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default page
