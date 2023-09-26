'use client'
import { cn } from '@/lib/utils'
import { PricingProps } from '@/types/type'
import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import AltPricing from '../AltPricing'

type sliderPricingProps = {
  className?: string
  pricingOptions: PricingProps[]
}

const SliderPricing = ({ className, pricingOptions }: sliderPricingProps) => {
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
  let touchStartX = 0
  let touchEndX = 0

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX - touchStartX
    const threshold = 50
    if (swipeDistance > threshold) {
      previousImage()
    } else if (swipeDistance < -threshold) {
      nextImage()
    }

    touchStartX = 0
    touchEndX = 0
  }

  return (
    <div className={cn('relative', className)}>
      <div className="flex flex-row snap-x overflow-x-hidden h-[350px] ">
        {pricingOptions.map((pricing, i) => {
          return (
            <>
              <div
                key={i}
                className={cn(
                  'w-full h-[320px] flex flex-col justify-center items-center flex-shrink-0 snap-center '
                )}
                ref={refs[i]}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onTouchEnd={() => handleTouchEnd()}
              >
                <AltPricing pricingOptions={pricing} />
              </div>
            </>
          )
        })}
      </div>
      {/* <ChevronLeft
        size={30}
        onClick={() => {
          previousImage()
        }}
        className="absolute left-0 top-[50%]"
      />{' '} */}
      <ChevronRight
        size={30}
        onClick={() => {
          nextImage()
        }}
        className="absolute right-0 top-[50%]"
      />{' '}
    </div>
  )
}

export default SliderPricing
