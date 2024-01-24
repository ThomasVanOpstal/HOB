import { PricingProps } from '@/types/type'
import { Check, Euro } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from './ui/button'
import { Service } from '@/server/getServices'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

const Pricing = ({ pricingOptions }: { pricingOptions: Service }) => {
  return (
    <div className="flex flex-col lsm:flex-row gap-1 mx-auto my-4 lsm:mx-auto w-[250px] lsm:w-[400px] sm:w-[500px] shadow-lg">
      <div className="hidden lsm:basis-1/2 lsm:block">
        <CldImage
          src={pricingOptions.Options[0].Option.Image[0].Image.Url}
          alt={pricingOptions.Options[0].Option.Image[0].Image.Alt}
          width={pricingOptions.Options[0].Option.Image[0].Image.W}
          height={pricingOptions.Options[0].Option.Image[0].Image.H}
        />
      </div>
      <div className="block basis-1/2 lsm:hidden">
        {pricingOptions.Options[0].Option.Image[1] ? (
          <CldImage
            src={pricingOptions.Options[0].Option.Image[1].Image.Url}
            alt={pricingOptions.Options[0].Option.Image[1].Image.Alt}
            width={pricingOptions.Options[0].Option.Image[1].Image.W}
            height={pricingOptions.Options[0].Option.Image[1].Image.H}
          />
        ) : (
          <CldImage
            src={pricingOptions.Options[0].Option.Image[0].Image.Url}
            alt={pricingOptions.Options[0].Option.Image[0].Image.Alt}
            width={pricingOptions.Options[0].Option.Image[0].Image.W}
            height={pricingOptions.Options[0].Option.Image[0].Image.H}
          />
        )}
      </div>
      <div className="basis-2/3 lsm:basis-1/2 flex flex-col justify-end items-center mb-2 mr-2">
        <div className="basis-1/2 flex flex-col justify-center">
          <h1 className="font-medium text-2xl text-center mb-2 ">
            {pricingOptions.Options[0].Option.Name}
          </h1>
          <ul className="mx-auto">
            <li className="mb-1 flex flex-row gap-2">
              <Check />
              {pricingOptions.Options[0].Option.Time[0]} minuten
            </li>
            <li className="mb-1 flex flex-row gap-2">
              <Check />
              {pricingOptions.Type}
            </li>
          </ul>
        </div>
        <div className="basis-1/2 flex flex-col justify-center items-center">
          <div className="mb-2 flex flex-row justify-center items-center ">
            <Euro size={15} className="basis-1/2" />
            <p className="font-medium text-4xl basis-1/2">
              {pricingOptions.Options[0].Option.Price[0]}
            </p>
          </div>
          <Link href={'/contact'}>
            <Button variant="default" className="font-medium text-xl">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Pricing
