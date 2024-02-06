import { PricingProps } from '@/types/type'
import { Check, Euro } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from './ui/button'
import { Services } from '@/server/getServices'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
interface PricingOptionProps {
  pricingOptions: Services
}

const AltPricing: FC<PricingOptionProps> = ({ pricingOptions }) => {
  return (
    <div className="flex flex-col  mx-auto my-4 w-[250px] h-[500px] shadow-lg sm:transition sm:ease-in-out sm:delay-100 sm:hover:-translate-y-2 ">
      <div className="h-[40%] flex items-end ">
        {pricingOptions.Image[1] ? (
          <CldImage
            src={pricingOptions.Image[1].Image.Url}
            alt={pricingOptions.Image[1].Image.Alt}
            width={pricingOptions.Image[1].Image.W}
            height={pricingOptions.Image[1].Image.H}
          />
        ) : (
          pricingOptions.Image[0] && (
            <CldImage
              src={pricingOptions.Image[0].Image.Url}
              alt={pricingOptions.Image[0].Image.Alt}
              width={pricingOptions.Image[0].Image.W}
              height={pricingOptions.Image[0].Image.H}
            />
          )
        )}
      </div>
      <div className="basis-2/3 flex flex-col justify-end items-center mb-2 mt-4">
        <div className="basis-1/2 w-[100%] flex flex-col justify-center">
          <h1 className="font-medium text-2xl text-center mb-6">
            {pricingOptions.name}
          </h1>
          <ul className="flex justify-center self-center flex-col">
            {pricingOptions.Options !== undefined ? (
              pricingOptions.Options.map((item, index) => {
                if (index < 3) {
                  return (
                    <li
                      className="mb-1 flex flex-row gap-2 w-[170px] text-lg items-center "
                      key={index}
                    >
                      <Check className="flex-shrink-0" />
                      <p className="w-[90%]">{item.Option.Name}</p>
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
        <Link href={`/${pricingOptions.Category.toLocaleLowerCase()}`}>
          <Button variant="default" className="font-medium text-xl my-4">
            Ontdek
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default AltPricing
