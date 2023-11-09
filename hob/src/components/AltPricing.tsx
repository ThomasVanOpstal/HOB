import { PricingProps } from '@/types/type'
import { Check, Euro } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from './ui/button'
import { Services } from '@/server/getServices'
import { CldImage } from 'next-cloudinary'
interface PricingOptionProps {
  pricingOptions: Services
}

const AltPricing: FC<PricingOptionProps> = ({ pricingOptions }) => {
  return (
    <div className="flex flex-col gap-1 mx-auto my-4 w-[250px] shadow-lg transition ease-in-out delay-100 hover:-translate-y-2 ">
      <div className="basis-1/2 pt-5">
        {pricingOptions.Image[1] ? (
          <CldImage
            src={pricingOptions.Image[1].Image.Url}
            alt={pricingOptions.Image[1].Image.Alt}
            width={pricingOptions.Image[1].Image.W}
            height={pricingOptions.Image[1].Image.H}
          />
        ) : (
          <CldImage
            src={pricingOptions.Image[0].Image.Url}
            alt={pricingOptions.Image[0].Image.Alt}
            width={pricingOptions.Image[0].Image.W}
            height={pricingOptions.Image[0].Image.H}
          />
        )}
      </div>
      <div className="basis-2/3 flex flex-col justify-end items-center mb-2 mr-2">
        <div className="basis-1/2 flex flex-col justify-center">
          <h1 className="font-medium text-2xl text-center mb-2 ">
            {pricingOptions.name}
          </h1>
          <ul className="flex justify-center self-center flex-col">
            {pricingOptions.Options !== undefined ? (
              pricingOptions.Options.map((item, index) => {
                if (index < 3) {
                  return (
                    <li
                      className="mb-1 flex flex-row gap-2 w-[150px]"
                      key={index}
                    >
                      <Check className="flex-shrink-0" />
                      {item.Option.Name}
                    </li>
                  )
                } else if (index === 4) {
                  return (
                    <li className="flex flex-row gap-2 w-[150px]" key={index}>
                      <Check />
                      ...
                    </li>
                  )
                }
              })
            ) : (
              <li className="w-[150px]">
                <Check />
                {pricingOptions.Type}
              </li>
            )}
          </ul>
        </div>
        <div className="basis-1/2 flex flex-col justify-center items-center">
          {/* <div className="mb-2 flex flex-row justify-center items-center ">
            <Euro size={15} className="basis-1/2" />
            <p className="font-medium text-4xl basis-1/2">
              {pricingOptions.Options[0].Option.Price}
            </p> */}
        </div>
        <Button variant="default" className="font-medium text-xl mt-4">
          Contact
        </Button>
      </div>
    </div>
  )
}

export default AltPricing
