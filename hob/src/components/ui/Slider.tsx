import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './button'
import { image } from '@/types/type'

type sliderProps = {
  className?: string
  images: image[]
  buttonAvailable: boolean
  titel?: string
  progressBarAvailable?: boolean
}

const Slider = ({
  className,
  images,
  buttonAvailable,
  titel,
  progressBarAvailable,
}: sliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const refs = images.reduce((acc, _val, i) => {
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
  const totalImages = images.length

  const nextImage = () => {
    if (currentIndex >= totalImages - 1) {
      scrollToImage(0)
    } else {
      scrollToImage(currentIndex + 1)
    }
  }
  const previousImage = () => {
    if (currentIndex === 0) {
      scrollToImage(totalImages - 1)
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
      <p className="font-medium text-3xl absolute top-2 text-center w-full">
        {titel || 'Ons aanbod'}
      </p>
      <div className="flex flex-row snap-x overflow-x-hidden h-[320px]">
        {images.map((image, i) => {
          return (
            <>
              <div
                key={i}
                className={cn(
                  'w-full h-full flex flex-col justify-center items-center flex-shrink-0 snap-center',
                  image.bg
                )}
                ref={refs[i]}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onTouchEnd={() => handleTouchEnd()}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={image.w}
                  height={image.h}
                  className="mt-12"
                />
                {buttonAvailable && (
                  <Button
                    key={i}
                    variant={
                      image.bg === 'bg-brokenWhite'
                        ? 'default'
                        : image.bg === 'bg-darkBrown'
                        ? 'outline_darkBrown'
                        : image.bg === 'bg-pink'
                        ? 'secondary'
                        : 'outline'
                    }
                    className={cn('font-medium text-xl mt-4 mb-8')}
                  >
                    <Link href={'/'}>{image.name}</Link>
                  </Button>
                )}
              </div>
            </>
          )
        })}
      </div>
      <ChevronLeft
        size={30}
        onClick={() => {
          previousImage()
        }}
        className="absolute left-0 top-[50%]"
      />{' '}
      <ChevronRight
        size={30}
        onClick={() => {
          nextImage()
        }}
        className="absolute right-0 top-[50%]"
      />{' '}
      {progressBarAvailable && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center ">
          {images.map((slide, i) => (
            <div
              key={i}
              className={cn(
                'cursor-pointer w-6 h-6 flex items-center justify-center'
              )}
            >
              <span
                className={cn(
                  'w-2 h-2 rounded-full inline-block',
                  currentIndex === i ? 'bg-darkBlue' : 'bg-lightBlue'
                )}
              ></span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Slider
