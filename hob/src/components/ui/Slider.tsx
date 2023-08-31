import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './button'
type Image = {
  name: string
  url: string
  alt: string
  bg: string
  w: number
  h: number
}

type sliderProps = {
  className?: string
}

const Slider = ({ className }: sliderProps) => {
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
      <p className="font-medium text-xl absolute top-2 left-1/2 transform -translate-x-1/2">
        Ons aanbod
      </p>
      <div className="flex flex-row snap-x overflow-x-hidden">
        {images.map((image, i) => {
          return (
            <>
              <div
                key={i}
                className={cn(
                  'w-full h-[320px] flex flex-col justify-center items-center flex-shrink-0 snap-center pt-12',
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
                />
                <Button
                  key={i}
                  variant={
                    image.bg === 'bg-brokenWhite'
                      ? 'default'
                      : image.bg === 'bg-darkBrown'
                      ? 'outline_darkBrown'
                      : 'secondary'
                  }
                  className={cn('font-medium text-xl mt-3 mb-10')}
                >
                  <Link href={'/'}>{image.name}</Link>
                </Button>
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
    </div>
  )
}

export default Slider
