import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, List } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from './button'
import { StringDecoder } from 'string_decoder'

type Image = {
  name: string
  url: string
  alt: string
  bg: string
  w: number
  h: number
}
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const images: Image[] = [
    {
      name: 'Skin',
      url: '/face.png',
      alt: 'gezicht',
      bg: 'bg-brokenWhite',
      w: 150,
      h: 150,
    },
    {
      name: 'Beauty',
      url: '/hand.png',
      alt: 'hand',
      bg: 'bg-darkBrown',
      w: 180,
      h: 180,
    },
    {
      name: 'Body',
      url: '/body.png',
      alt: 'lichaam',
      bg: 'bg-pink',
      w: 100,
      h: 100,
    },
  ]
  const prevSlide = () => {
    let isFirstSlide = currentIndex === 0
    let index = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(index)
  }
  const nextSlide = () => {
    let isLastSlide = currentIndex === images.length - 1
    let index = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(index)
  }
  const color = images.at(currentIndex)?.bg
  return (
    <div className={cn('flex flex-col items-center', color)}>
      <h1 className="font-medium text-xl mt-4 mb-2">Ons aanbod</h1>
      <div className="flex flex-row items-center justify-between w-full ">
        <ChevronLeft
          size={30}
          onClick={() => {
            prevSlide()
          }}
        />{' '}
        <Image
          src={images.at(currentIndex)?.url ?? '/'}
          alt={images.at(currentIndex)?.alt ?? 'geen informatie'}
          width={images.at(currentIndex)?.w ?? 250}
          height={images.at(currentIndex)?.h ?? 250}
        />
        <ChevronRight
          size={30}
          onClick={() => {
            nextSlide()
          }}
        />
      </div>
      <Button
        variant={
          color === 'bg-brokenWhite'
            ? 'default'
            : color === 'bg-pink'
            ? 'secondary'
            : 'outline_darkBrown'
        }
        className="font-medium text-xl my-2"
      >
        {images.at(currentIndex)?.name ?? 'Go'}
      </Button>
    </div>
  )
}

export default Slider
