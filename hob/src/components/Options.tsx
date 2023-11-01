import { Heart } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from './ui/button'
import { Service } from '@/server/getServices'
import { set } from 'zod'
const Options = ({ service }: { service: Service }) => {
  const options = service.Options.map((option) => option.Option)
  const [isVerlengingFilled, setVerlengingIsFilled] = useState(false)
  const [isVerHandFilled, setVerHandIsFilled] = useState(false)
  const [isVerwijderenFilled, setVerwijderenIsFilled] = useState(false)
  const [price, setPrice] = useState<number>(35)
  const [activeDiv, setActiveDiv] = useState<number>(0)
  const [pricing, setPricing] = useState<
    { givenPrice: number; name: String }[]
  >([])
  const divs = [
    { alt: 'Babyboom', src: '/babyboom.png' },
    { alt: 'French manicure', src: '/frenhv2.png' },
    { alt: 'Blush', src: '/nail_glitter.png' },
    { alt: 'Colorful nails', src: '/color_nail.png' },
    { alt: 'Stones on nails', src: '/Nails_stones.png' },
  ]
  const handleClick = (index: number) => {
    setActiveDiv(index)
    setVerlengingIsFilled(false)
    setVerHandIsFilled(false)
    setVerwijderenIsFilled(false)
    setPrice(options[index].Price[0])
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
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 mx-auto lsm:my-4 lsm:mx-auto  lsm:w-[90%] mdd:w-[800px] sm:shadow-lg">
      <div className="basis-1/2 flex items-end justify-center min-h-[500px]">
        <CldImage
          src={options[activeDiv].Image[0].Image.Url}
          alt={options[activeDiv].Image[0].Image.Alt}
          width={options[activeDiv].Image[0].Image.W}
          height={options[activeDiv].Image[0].Image.H}
        />
      </div>

      <div className=" justify-center basis-1/2 flex flex-col ml-6 sm:ml-0 mb-2 mr-2">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <h1 className="basis-1/2 font-medium text-3xl  mb-2 ">Gelnagels</h1>
            <h1 className="font-medium text-xl mb-2 ">
              {options[activeDiv].Name}
            </h1>
          </div>
          <h1 className="font-medium text-2xl  mb-2  basis-1/2 flex self-end justify-end pr-6">
            {' '}
            ${price}
          </h1>
        </div>
        <h1 className="font-medium text-xl mb-2 ">Stijl</h1>
        <div className="flex flex-row gap-2 w-[150px] mb-2">
          {divs.map((div, index) => (
            <div
              key={index}
              className={`pb-2 ${
                activeDiv === index ? 'border-b-2 border-b-brokenPink' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              <Image alt={div.alt} src={div.src} width={25} height={25} />
            </div>
          ))}
        </div>
        <h1 className="font-medium text-lg mb-2 ">Extra</h1>
        <div className="flex flex-col mb-6">
          <div className="flex flex-row gap-2">
            <Heart
              fill={fillColor(isVerlengingFilled)}
              color="#f2c5b5"
              size={25}
              onClick={() => {
                setVerlengingIsFilled(!isVerlengingFilled)
                changePrice(
                  options[6].Price[0],
                  isVerlengingFilled,
                  options[6].Name
                )
              }}
            />
            Verlenging voor 1 nagel
          </div>
          <div className="flex flex-row gap-2">
            <Heart
              fill={fillColor(isVerHandFilled)}
              color="#f2c5b5"
              size={25}
              onClick={() => {
                setVerHandIsFilled(!isVerHandFilled)
                changePrice(
                  options[5].Price[0],
                  isVerHandFilled,
                  options[5].Name
                )
              }}
            />
            Verlenging voor alle nagels
          </div>
          <div className="flex flex-row gap-2">
            <Heart
              fill={fillColor(isVerwijderenFilled)}
              color="#f2c5b5"
              size={25}
              onClick={() => {
                changePrice(
                  options[7].Price[0],
                  isVerwijderenFilled,
                  options[7].Name
                )
                setVerwijderenIsFilled(!isVerwijderenFilled)
              }}
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
