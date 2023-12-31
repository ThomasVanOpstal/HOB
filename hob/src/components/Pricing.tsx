import { PricingProps } from '@/types/type'
import { Check, Euro } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from './ui/button'
interface PricingOptionProps {
  pricingOptions: PricingProps
}

const Pricing: FC<PricingOptionProps> = ({ pricingOptions }) => {
  return (
    <div className="flex flex-col lsm:flex-row gap-1 mx-auto my-4 lsm:mx-auto w-[250px] lsm:w-[400px] sm:w-[500px] shadow-lg">
      <div className="hidden lsm:basis-1/2 lsm:block">
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
      <div className="basis-2/3 lsm:basis-1/2 flex flex-col justify-end items-center mb-2 mr-2">
        <div className="basis-1/2 flex flex-col justify-center">
          <h1 className="font-medium text-2xl text-center mb-2 ">
            {pricingOptions.title}
          </h1>
          <ul className="mx-auto">
            {pricingOptions.description.map((item, index) => (
              <li className="mb-1 flex flex-row gap-2" key={index}>
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-1/2 flex flex-col justify-center items-center">
          <div className="mb-2 flex flex-row justify-center items-center ">
            <Euro size={15} className="basis-1/2" />
            <p className="font-medium text-4xl basis-1/2">
              {pricingOptions.price}
            </p>
          </div>
          <Button variant="default" className="font-medium text-xl">
            Contact
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
