import { Service } from '@/server/getServices'
import { Euro, Heart } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { InfoDialog } from './ui/info-dialog'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'
const Options = ({ service }: { service: Service }) => {
  const [value, setValue] = React.useState('Small')
  const [medium, setMedium] = React.useState(false)
  const [large, setLarge] = React.useState(false)
  const options = service.Options.map((option) => option.Option)
  const [isVerlengingFilled, setVerlengingIsFilled] = useState(false)
  const [isVerHandFilled, setVerHandIsFilled] = useState(false)
  const [isVerwijderenFilled, setVerwijderenIsFilled] = useState(false)
  const [price, setPrice] = useState<number>(35)
  const [activeDiv, setActiveDiv] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pricing, setPricing] = useState<
    { givenPrice: number; name: String }[]
  >([])
  const divs = [
    { alt: 'Babyboom', src: 'Beauty/babyboom_vvifgm.png' },
    { alt: 'French manicure', src: 'Beauty/frenhv2_vq13wo.png' },
    { alt: 'Blush', src: 'Beauty/nail_glitter_bwjomq.png' },
    { alt: 'Colorful nails', src: 'Beauty/color_nail_hgnjgv.png' },
    { alt: 'Stones on nails', src: 'Beauty/Nails_stones_g5oytu.png' },
  ]
  const handleClick = (index: number) => {
    setVerlengingIsFilled(false)
    setVerHandIsFilled(false)
    setVerwijderenIsFilled(false)
    setPrice(options[index].Price)
    setActiveDiv(index)
    setValue('Small')
    setMedium(false)
    setLarge(false)
  }
  const fillColor = (isfilled: boolean) => {
    if (isfilled) {
      return '#F9D4C6'
    }
    return 'none'
  }
  const changePrice = (givenPrice: number, bool: boolean, name: String) => {
    if (!bool) {
      setPrice(price + givenPrice)
      pricing.push({ givenPrice, name })
      setPricing(pricing)
    } else {
      pricing.forEach((p, index) => {
        if (p.name.trim() == name.trim()) {
          setPrice(price - p.givenPrice)
          pricing.splice(index, 1)
        }
      })

      setPricing(pricing)
    }
  }
  const handleImageLoad = () => {
    setIsLoading(false)
  }
  useEffect(() => {
    handleImageLoad()
  }, [activeDiv])

  return (
    <div className="flex flex-col sm:flex-row gap-4 mx-auto lsm:my-4 lsm:mx-auto  lsm:w-[90%] mdd:w-[800px] sm:shadow-lg">
      <div className="basis-1/2 flex items-end justify-center min-h-[500px]">
        {!isLoading && (
          <CldImage
            src={options[activeDiv].Image[0].Image.Url}
            alt={options[activeDiv].Image[0].Image.Alt}
            width={options[activeDiv].Image[0].Image.W}
            height={options[activeDiv].Image[0].Image.H}
          />
        )}
      </div>
      <div className=" justify-center basis-1/2 flex flex-col ml-6 sm:ml-0 mb-2 mr-2">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <h1 className="mt-10 lsm:mt-0 basis-1/2 font-medium text-3xl  mb-2 ">
              Gelnagels
            </h1>
            <h1 className="font-medium text-xl mb-2 ">
              {options[activeDiv].Name}
            </h1>
          </div>
          <h1 className="font-medium text-4xl  mb-2  basis-1/2 flex self-end justify-end pr-6">
            {' '}
            <div className=" flex flex-row justify-center items-center ">
              <Euro size={15} className="basis-1/2" />
              {price}
            </div>
          </h1>
        </div>
        <h1 className="font-medium text-xl mb-2 ">Stijl</h1>
        <div className="flex flex-row gap-2 w-[150px] mb-2">
          {divs.map((div, index) => (
            <div
              key={index}
              className={`pb-2 cursor-pointer ${
                activeDiv === index ? 'border-b-2 border-b-brokenPink' : ''
              }`}
              onClick={() => {
                handleClick(index)
                setIsLoading(true)
              }}
            >
              <CldImage alt={div.alt} src={div.src} width={25} height={25} />
            </div>
          ))}
        </div>
        <span className="flex flex-row gap-1">
          <h1 className="font-medium text-lg mb-2 ">Lengte</h1>
          <InfoDialog />
        </span>
        <div className="flex flex-col mb-2">
          <div className="flex flex-row gap-2">
            <ToggleGroup
              type="single"
              variant={'outline'}
              value={value}
              onValueChange={(value) => {
                if (value) setValue(value)
              }}
            >
              <ToggleGroupItem
                value="Small"
                className="w-[40px]"
                aria-label="Toggle bold"
                onClick={() => {
                  setMedium(false)
                  setLarge(false)
                  handleClick(activeDiv)
                }}
              >
                {' '}
                <p className="font-medium text-xl text-center text-darkPink ">
                  S
                </p>{' '}
              </ToggleGroupItem>
              <ToggleGroupItem
                value="italic"
                className="w-[40px]"
                aria-label="Toggle italic"
                onClick={() => {
                  if (!medium && !large) {
                    changePrice(10, medium, 'medium')
                    setMedium(!medium)
                  } else if (large) {
                    setPrice(price - 5)
                    setLarge(!large)
                    setMedium(!medium)
                  }
                }}
              >
                <p className="font-medium text-xl text-center text-darkPink">
                  M
                </p>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="underline"
                className="w-[40px]"
                aria-label="Toggle underline"
                onClick={() => {
                  if (!medium && !large) {
                    changePrice(15, large, 'medium')
                    setLarge(!large)
                  } else if (medium) {
                    setPrice(price + 5)
                    setMedium(!medium)
                    setLarge(!large)
                  }
                }}
              >
                <p className="font-medium text-xl text-center text-darkPink">
                  L
                </p>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <h1 className="font-medium text-lg mb-2 ">Extra</h1>
        <div className="flex flex-col mb-6">
          <div className="flex flex-row gap-2">
            <Heart
              fill={fillColor(isVerwijderenFilled)}
              color="#f2c5b5"
              size={25}
              className="cursor-pointer"
              onClick={() => {
                changePrice(
                  options[7].Price,

                  isVerwijderenFilled,
                  options[7].Name
                )
                setVerwijderenIsFilled(!isVerwijderenFilled)
              }}
            />
            verwijderen gelnagel + nazorg
          </div>
        </div>
        <Link href={'/contact'}>
          <Button variant="default" className="font-medium text-xl w-[100px] ">
            Contact
          </Button>
        </Link>{' '}
      </div>
    </div>
  )
}

export default Options
