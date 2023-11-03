import { PricingProps } from '@/types/type'
import { Check, Euro } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from './ui/button'
import { Services } from '@/server/getServices'
interface PricingOptionProps {
  pricingOptions: Services
}

const AltPricing: FC<PricingOptionProps> = ({ pricingOptions }) => {
  return (
    <div className="flex flex-col gap-1 mx-auto my-4  w-[250px] shadow-lg transition ease-in-out delay-100 hover:-translate-y-2 ">
      <div className="block basis-1/2">
        <Image src={'/massage.jpg'} alt={'massage'} width={250} height={250} />
      </div>
      <div className="basis-2/3 flex flex-col justify-end items-center mb-2 mr-2">
        <div className="basis-1/2 flex flex-col justify-center">
          <h1 className="font-medium text-2xl text-center mb-2 ">
            {pricingOptions.name}
          </h1>
          <ul className="mx-auto">
            {pricingOptions.Options !== undefined ? (
              pricingOptions.Options.map((item, index) => {
                if (index < 3) {
                  return (
                    <li className="mb-1 flex flex-row gap-2" key={index}>
                      <Check />
                      {item.Option.Name}
                    </li>
                  )
                } else if (index === 4) {
                  return (
                    <li className="mb-1 flex flex-row gap-2" key={index}>
                      <Check />
                      ...
                    </li>
                  )
                }
              })
            ) : (
              <li>
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
        <Button variant="default" className="font-medium text-xl">
          Contact
        </Button>
      </div>
    </div>
  )
}

export default AltPricing
