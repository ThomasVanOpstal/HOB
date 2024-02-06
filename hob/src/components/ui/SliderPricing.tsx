'use client'
import { cn } from '@/lib/utils'
import { PricingProps } from '@/types/type'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import AltPricing from '../AltPricing'
import { Services } from '@/server/getServices'

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
    <div className={cn('relative', className)}>
      <div className="flex flex-row snap-x overflow-x-hidden overflow-y-hidden h-[500px] ">
        {pricingOptions.map((pricing, i) => {
          if (pricing.name.toLowerCase().trim() !== pathname) {
            return (
              <div
                key={i}
                className={cn(
                  'w-full h-[500px] flex flex-col justify-center items-center flex-shrink-0 snap-center '
                )}
                ref={refs[i]}
              >
                <AltPricing pricingOptions={pricing} key={i} />
              </div>
            )
          }
        })}
      </div>
      <ChevronRight
        size={40}
        onClick={() => {
          nextImage()
        }}
        className="absolute right-5 top-[50%]"
      />{' '}
      <ChevronLeft
        size={40}
        onClick={() => {
          previousImage()
        }}
        className="absolute left-5 top-[50%]"
      />{' '}
    </div>
  )
}

export default SliderPricing
