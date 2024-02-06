import { PricingProps } from '@/types/type'
import { Check, Euro, Heart } from 'lucide-react'
import Image from 'next/image'
import { FC, useState } from 'react'
import { Button } from './ui/button'
import { Service } from '@/server/getServices'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { set } from 'zod'

type Options = {
  name: string
  price: number
  bool: boolean
}
const Pricing = ({ pricingOptions }: { pricingOptions: Service }) => {
  const [options, setOptions] = useState<Options[]>([])
  const [price, setPrice] = useState<number | null>(
    pricingOptions.Options[0].Option.Price
  )
  const addOption = (name: string, price: number, bool: boolean) => {
    const newOption = { name, price, bool }
    const newOptions = [...options, newOption]
    setOptions(newOptions)
    return options
  }
  const changePrice = (givenprice: number, bool: boolean) => {
    if (price === null) return
    bool ? setPrice(price - givenprice) : setPrice(price + givenprice)
  }
  const fillColor = (isfilled: boolean) => {
    if (isfilled) {
      return '#F9D4C6'
    }
    return 'none'
  }
  return (
    <div className="flex flex-col sm:flex-row gap-1 mx-auto lsm:mx-auto w-[250px] sm:w-[600px] bg-white shadow-lg">
      <div className="hidden self-center msm:basis-1/2 sm:block fill-current">
        <CldImage
          src={pricingOptions.Options[0].Option.Image[0].Image.Url}
          alt={pricingOptions.Options[0].Option.Image[0].Image.Alt}
          width={pricingOptions.Options[0].Option.Image[0].Image.W}
          height={pricingOptions.Options[0].Option.Image[0].Image.H}
        />
      </div>
      <div className="block basis-1/2 sm:hidden">
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
      <div className="basis-2/3 lsm:basis-1/2 flex flex-col justify-end items-center mb-2 bg-white">
        <div className="basis-1/2 flex flex-col items-center justify-center">
          <h1 className="font-medium text-2xl text-center mb-6 pt-2 w-[90%]">
            {pricingOptions.Options[0].Option.Name}
          </h1>
          <ul className="mx-auto w-[80%]">
            <li className="mb-1 flex flex-row gap-2 flex-shrink-0 text-xl font-normal">
              <Check className="flex-shrink-0" />
              {pricingOptions.Options[0].Option.Time} minuten
            </li>
            <li className=" flex flex-row gap-2 flex-shrink-0 text-xl font-normal">
              <Check className="flex-shrink-0" />
              {pricingOptions.Type}
            </li>
          </ul>
          {pricingOptions.Options.length > 1 && (
            <>
              {pricingOptions.Options.map((option, index) => {
                if (index > 0) {
                  return (
                    <Options
                      changePrice={changePrice}
                      name={option.Option.Name}
                      price={option.Option.Price}
                      index={index}
                      key={index}
                    />
                  )
                }
                return null
              })}
            </>
          )}
        </div>

        <div className="basis-1/2 flex flex-col justify-end items-center mb-2">
          <div className=" flex flex-row justify-center items-center mt-4 ">
            <Euro size={15} className="basis-1/2" />
            <p className="font-medium text-4xl basis-1/2">{price}</p>
          </div>
          <Link href={'/contact'} className="mt-2 lsm:mb-0">
            <Button variant="default" className="font-medium text-xl">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
interface Props {
  index: number
  name: string
  price: number
  changePrice: (price: number, bool: boolean) => void
}
const Options = ({ index, name, price, changePrice }: Props) => {
  const fillColor = (isfilled: boolean) => {
    if (isfilled) {
      return '#F9D4C6'
    }
    return 'none'
  }
  const [bool, setBool] = useState<boolean>(false)

  return (
    <>
      <div key={index}>
        <h1 className="font-medium text-xl mb-2">Extra</h1>
        <div className="flex flex-row gap-2 text-xl font-normal">
          <Heart
            fill={fillColor(bool)}
            color="#f2c5b5"
            size={25}
            className="cursor-pointer"
            onClick={() => {
              changePrice(price, bool)
              setBool(!bool)
            }}
          />
          {name}
        </div>
      </div>
    </>
  )
}

export default Pricing
