import { PricingProps } from '@/types/type'
import { Check, Euro } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import { Button } from './ui/button'
import Image from 'next/image'

export default function PricingManuel({
  pricingOption,
}: {
  pricingOption: PricingProps
}) {
  return (
    <div className="flex flex-col lsm:flex-row gap-1 mx-auto my-4 lsm:mx-auto w-[250px] lsm:w-[400px] sm:w-[500px] shadow-lg">
      <div className="hidden lsm:basis-1/2 lsm:block">
        <CldImage
          src={pricingOption.desktopImage.url}
          alt={pricingOption.desktopImage.alt}
          width={pricingOption.desktopImage.w}
          height={pricingOption.desktopImage.h}
        />
      </div>
      <div className="block basis-1/2 lsm:hidden">
        <CldImage
          src={pricingOption.mobileImage.url}
          alt={pricingOption.mobileImage.alt}
          width={pricingOption.mobileImage.w}
          height={pricingOption.mobileImage.h}
        />
      </div>
      <div className="basis-2/3 lsm:basis-1/2 flex flex-col justify-end items-center mb-2 mr-2">
        <div className="basis-1/2 flex flex-col justify-center">
          <h1 className="mt-2 lsm:mt-0 font-medium text-2xl text-center mb-2 ">
            {pricingOption.title}
          </h1>
          <ul className="mx-auto">
            <li className="mb-1 flex flex-row gap-2">
              <Check />
              {pricingOption.description[0]} minuten
            </li>
            <li className="mb-1 flex flex-row gap-2">
              <Check />
              {pricingOption.description[1]}
            </li>
          </ul>
        </div>
        <div className="basis-1/2 flex flex-col justify-center items-center">
          <div className="mb-2 flex flex-row justify-center items-center ">
            <Euro size={15} className="basis-1/2" />
            <p className="font-medium text-4xl basis-1/2">
              {pricingOption.price}
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
