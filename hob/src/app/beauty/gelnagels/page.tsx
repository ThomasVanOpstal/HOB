'use client'
import { trpc } from '@/app/_trpc/client'
import AltPricing from '@/components/AltPricing'
import Options from '@/components/Options'
import Pricing from '@/components/Pricing'
import ImageGallery from '@/components/ui/ImageGallery'
import Slider from '@/components/ui/Slider'
import SliderPricing from '@/components/ui/SliderPricing'
import Socials from '@/components/ui/Socials'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SearchResult, image } from '@/types/type'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const page = () => {
  const galleryImages = trpc.getImages.useQuery({ folder: 'Beauty' })
  const services = trpc.getAllServices.useQuery()
  const service = trpc.getServices.useQuery({ Service: 'Gelnagels' })
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
  const Gimages: image[] = [
    {
      name: 'Skin',
      url: '/face.png',
      alt: 'gezicht',
      bg: 'bg-green',
      w: 150,
      h: 150,
    },
    {
      name: 'Beauty',
      url: '/hand.png',
      alt: 'hand',
      bg: 'bg-green',
      w: 180,
      h: 180,
    },
    {
      name: 'Body',
      url: '/body.png',
      alt: 'lichaam',
      bg: 'bg-green',
      w: 100,
      h: 100,
    },
  ]

  const description = ['30 minuten', 'Ontspanning massage']
  const price = 30
  const title = 'Massage'
  const mobileImage: image = {
    name: 'Vrouw krijgt een ontspanning massage',
    url: '/massageFlower.jpg',
    alt: 'massage',
    bg: 'bg-brokenWhite',
    w: 450,
    h: 450,
  }
  const desktopImage: image = {
    name: 'Vrouw krijgt een ontspanning massage',
    url: '/massagePricing.jpg',
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
  const pricingList = [
    pricingOption,
    pricingOption,
    pricingOption,
    pricingOption,
  ]

  return (
    <>
      <div className="flex flex-col desktop:flex-row bg-darkBrown desktop:pt-2">
        <div className="desktop:basis-1/2 flex desktop:justify-start desktop:items-center">
          <Image
            src={'/handPainting.png'}
            alt={'Gelakte nagels'}
            width={800}
            height={800}
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
              <ImageGallery images={images} className="hidden sm:block" />

              <Slider
                images={images}
                buttonAvailable={false}
                className="block sm:hidden"
                cloudinary={true}
              />
            </div>
          )}
        </div>
      </div>
      <div className="mb-12">
        {service.status === 'success' && service.data ? (
          <Options service={service?.data} />
        ) : (
          <div className="h-[500px]">loading</div>
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
            <div className="h-[500px]">loading</div>
          )}
        </div>
        <div className="hidden mb-12 sm:flex sm:flex-row sm:flex-wrap sm:w-[80%] sm:justify-center sm:gap-2">
          {services.status === 'success' &&
            services.data.map((pricingOption, index) => {
              const lowerCaseName = pricingOption.name.toLowerCase().trim()
              console.log(pricingOption.name.toLowerCase())
              if (
                lowerCaseName !== pathnames.at(-1)?.toLowerCase().trim() &&
                index < 4
              ) {
                return <AltPricing key={index} pricingOptions={pricingOption} />
              } else {
                return null
              }
            })}
        </div>
      </div>
    </>
  )
}

export default page
