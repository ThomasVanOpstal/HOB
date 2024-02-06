'use client'
import { cn } from '@/lib/utils'
import { PricingProps } from '@/types/type'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import AltPricing from '../AltPricing'
import { Services } from '@/server/getServices'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel'

type sliderPricingProps = {
  className?: string
  pricingOptions: Services[]
  pathname?: string
}

const SliderPricing = ({
  className,
  pricingOptions,
  pathname,
}: sliderPricingProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const refs = pricingOptions.reduce((acc, _val, i) => {
    acc[i] = React.createRef()
    return acc
  }, [] as React.RefObject<HTMLDivElement>[])

  const scrollToImage = (i: number) => {
    setCurrentIndex(i)

    refs[i]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }
  const totalpricingOptions = pricingOptions.length

  const nextImage = () => {
    if (currentIndex >= totalpricingOptions - 1) {
      scrollToImage(0)
    } else {
      scrollToImage(currentIndex + 1)
    }
  }
  const previousImage = () => {
    if (currentIndex === 0) {
      scrollToImage(totalpricingOptions - 1)
    } else {
      scrollToImage(currentIndex - 1)
    }
  }

  return (
    <Carousel className="w-full max-w-lsm mx-auto">
      <CarouselContent>
        {pricingOptions.map((pricing, i) => {
          if (pricing.name.toLowerCase().trim() !== pathname) {
            return (
              <CarouselItem key={i}>
                <div className="p-1">
                  <AltPricing pricingOptions={pricing} key={i} />
                </div>
              </CarouselItem>
            )
          }
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default SliderPricing
