'use client'
import { trpc } from '@/app/_trpc/client'
import AltPricing from '@/components/AltPricing'
import Pricing from '@/components/Pricing'
import SliderPricing from '@/components/ui/SliderPricing'
import Socials from '@/components/ui/Socials'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { image } from '@/types/type'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const page = () => {
  // const galleryImages = trpc.getImages.useQuery({ folder: 'Body' })
  const services = trpc.getAllServices.useQuery()
  const service = trpc.getServices.useQuery({ Service: 'Ontspannende massage' })
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

  return (
    <>
      <div className="flex flex-col desktop:flex-row bg-brokenWhite desktop:py-6">
        <div className="basis-1/2 flex justify-center items-center">
          <Image
            src={'/massage.jpg'}
            alt={'Massage'}
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
              Wat is een massage?
            </h1>
            <p className="mb-2 font-medium">
              Een massage is als een verwenmoment voor je lichaam en geest. Het
              is een therapie waarbij een ervaren therapeut je spieren, weefsels
              en gewrichten behandelt om stress te verminderen, pijn te
              verlichten en algeheel welzijn te bevorderen. Massage verbetert de
              bloedcirculatie, verhoogt de flexibiliteit en versnelt het herstel
              na blessures. Wij bieden een ontspanningsmassage aan om uw lichaam
              helemaal tot rust te laten komen. Klaar om te ontspannen? Wacht
              niet langer en boek nu je massage-ervaring!
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

      <div className="mb-12  ">
        <h1 className="font-medium text-3xl text-center my-4 mb-2 ">Prijs</h1>
        <div className="flex items-center justify-center">
          <Socials />
        </div>
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
