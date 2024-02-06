'use client'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './button'
import { image } from '@/types/type'
import { CldImage } from 'next-cloudinary'

type sliderProps = {
  className?: string
  images: image[]
  buttonAvailable: boolean
  titel?: string
  showTitel?: boolean
  progressBarAvailable?: boolean
  cloudinary?: boolean
}

const Slider = ({
  className,
  images,
  buttonAvailable,
  titel,
  showTitel,
  progressBarAvailable,
  cloudinary,
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

  return (
    <div className={cn('relative', className)}>
      {showTitel ? (
        <p className="font-medium text-3xl absolute top-4 text-center w-full ">
          {titel || 'Ons aanbod'}
        </p>
      ) : null}
      <div className="flex flex-row snap-x overflow-x-hidden overflow-y-hidden h-[350px]">
        {images.map((image, i) => {
          return (
            <div
              key={i}
              className={cn(
                'w-full h-full flex flex-col justify-center items-center flex-shrink-0 snap-center',
                image.bg
              )}
              ref={refs[i]}
            >
              {cloudinary ? (
                <CldImage
                  src={image.url}
                  alt={image.alt}
                  width={image.w}
                  height={image.h}
                  className="mt-16"
                />
              ) : (
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={image.w}
                  height={image.h}
                  className="mt-16"
                />
              )}

              {buttonAvailable && (
                <Link href={`/${image.name.toLocaleLowerCase()}`}>
                  <Button
                    // key={i}
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
                    {image.name}
                  </Button>
                </Link>
              )}
            </div>
          )
        })}
      </div>
      <ChevronLeft
        size={40}
        onClick={() => {
          previousImage()
        }}
        className="absolute left-5 top-[50%]"
      />{' '}
      <ChevronRight
        size={40}
        onClick={() => {
          nextImage()
        }}
        className="absolute right-5 top-[50%]"
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
