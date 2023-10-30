import Image from 'next/image'
import { FC, useState } from 'react'
import { Button } from './ui/button'
import { Check, Circle, Euro, Heart } from 'lucide-react'
import { image } from '@/types/type'

interface OptionsProps {}

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
const pricingList = [pricingOption, pricingOption, pricingOption, pricingOption]
const Options: FC<OptionsProps> = ({}) => {
  const pricingOptions = {
    description: description,
    desktopImage: desktopImage,
    mobileImage: mobileImage,
    price: price,
    title: title,
  }
  const [isFilled, setIsFilled] = useState(false)

  const fillColor = isFilled ? '#F9D4C6' : 'none'

  return (
    <div className="flex flex-col sm:flex-row gap-4 mx-auto lsm:my-4 lsm:mx-auto  lsm:w-[90%] mdd:w-[800px] sm:shadow-lg">
      <div className="hidden basis-1/2 lsm:block">
        <Image
          src={pricingOptions.desktopImage.url}
          alt={'massage'}
          width={300}
          height={300}
        />
      </div>
      <div className="block basis-1/2 lsm:hidden">
        <Image
          src={
            pricingOptions.mobileImage?.url || pricingOptions.desktopImage.url
          }
          alt={'massage'}
          width={450}
          height={450}
        />
      </div>
      <div className=" justify-center basis-1/2 flex flex-col ml-6 sm:ml-0 mb-2 mr-2">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <h1 className="font-medium text-3xl  mb-2 ">Gelnagels</h1>
            <h1 className="font-medium text-xl mb-2 ">French manicure</h1>
          </div>
          <h1 className="font-medium text-2xl  mb-2  basis-1/2 flex self-end justify-end p-6 ">
            {' '}
            $30
          </h1>
        </div>
        <h1 className="font-medium text-xl mb-2 ">Optie</h1>
        <div className="flex flex-row gap-2 w-[100px] mb-2">
          <div className="pb-2 border-b-2 border-b-brokenPink">
            <Image
              alt="Babyboom"
              src="/french_manicure.png"
              width={25}
              height={25}
            />
          </div>
          <div>
            <Image alt="Babyboom" src="/babyboom.png" width={25} height={25} />
          </div>
          <div>
            <Image
              alt="Babyboom"
              src="/Nails_stones.png"
              width={25}
              height={25}
            />
          </div>
        </div>
        <h1 className="font-medium text-lg mb-2 ">Extra</h1>
        <div className="flex flex-col mb-6">
          <div className="flex flex-row gap-2">
            <Heart
              fill={fillColor}
              color="#f2c5b5"
              size={25}
              onClick={() => setIsFilled(!isFilled)}
            />
            Verlenging voor 1 nagel
          </div>
          <div className="flex flex-row gap-2">
            <Heart
              fill={fillColor}
              color="#f2c5b5"
              size={25}
              onClick={() => setIsFilled(!isFilled)}
            />
            Verlenging voor alle nagels
          </div>
          <div className="flex flex-row gap-2">
            <Heart
              fill={fillColor}
              color="#f2c5b5"
              size={25}
              onClick={() => setIsFilled(!isFilled)}
            />
            verwijderen gelnagel + nazorg
          </div>
        </div>
        <Button variant="default" className="font-medium text-xl w-[100px] ">
          Contact
        </Button>{' '}
      </div>
    </div>
  )
}

export default Options
