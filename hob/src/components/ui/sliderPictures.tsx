'use client'
import { Services } from '@/server/getServices'
import AltPricing from '../AltPricing'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel'
import { image } from '@/types/type'
import { CldImage } from 'next-cloudinary'

type sliderPictures = {
  className?: string
  images: image[]
  pathname?: string
}

const SliderPictures = ({ className, images, pathname }: sliderPictures) => {
  return (
    <Carousel className="w-full max-w-lsm mx-auto">
      <CarouselContent>
        {images.map((image, i) => {
          return (
            <CarouselItem key={i}>
              <div className="flex items-center justify-center min-h-[250px]">
                <CldImage
                  src={image.url}
                  alt={image.alt}
                  width={image.w}
                  height={image.h}
                  className="mt-16"
                />
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious className="border-none" />
      <CarouselNext className="border-none" />
    </Carousel>
  )
}

export default SliderPictures
