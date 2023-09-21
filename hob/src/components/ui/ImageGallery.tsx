import { cn } from '@/lib/utils'
import { image } from '@/types/type'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { FC, MutableRefObject, useRef, useState } from 'react'
import { motion as m } from 'framer-motion'
interface ImageGalleryProps {
  className?: string
}

const ImageGallery: FC<ImageGalleryProps> = ({ className }) => {
  const gallery = useRef(null)
  const scrollToSection = (ref: MutableRefObject<null | any>) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }
  const transitionValues = {
    duration: 1.5,
    repeat: 'infinity',
  }
  const [showAllImages, setShowAllImages] = useState<boolean>(false)
  const mobileImage: image = {
    name: 'Vrouw krijgt een ontspanning massage',
    url: '/massageFlower.jpg',
    alt: 'massage',
    bg: 'bg-brokenWhite',
    w: 450,
    h: 450,
  }
  const desktopImage: image = {
    name: 'Vrouw krijgt een ontspanning massage',
    url: '/massagePricing.jpg',
    alt: 'massage',
    bg: 'bg-brokenWhite',
    w: 300,
    h: 300,
  }
  const images = [
    mobileImage,
    desktopImage,
    desktopImage,
    mobileImage,
    mobileImage,
    desktopImage,
    mobileImage,
  ]
  return (
    <>
      <div>
        <div
          id="gallery"
          ref={gallery}
          className={cn(
            'flex flex-row flex-wrap gap-2 justify-center w-[800px] h-[400px] overflow-y-hidden',
            showAllImages ? 'h-auto' : 'h-[400px]'
          )}
        >
          <div className="flex flex-col gap-2">
            {images.map(
              (image, i) =>
                i <= 2 && (
                  <div
                    key={i}
                    className="max-w-[300px] flex justify-center items-center animate-fadeOut"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={image.w}
                      height={image.h}
                    />
                  </div>
                )
            )}
          </div>
          <div className="flex flex-col gap-2 ">
            {images.map(
              (image, i) =>
                i > 2 && (
                  <div
                    key={i}
                    className="max-w-[300px] flex justify-center items-center"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={image.w}
                      height={image.h}
                    />
                  </div>
                )
            )}
          </div>
        </div>
        <m.div
          transition={{
            y: transitionValues,
          }}
          animate={{
            y: ['0rem', '0.5rem', '0rem'],
          }}
        >
          <ChevronDown
            size={30}
            className={cn('mx-auto mt-2', showAllImages ? 'rotate-180' : '')}
            onClick={() => {
              scrollToSection(gallery)
              setShowAllImages((prev) => !prev)
            }}
          />
        </m.div>
      </div>
    </>
  )
}

export default ImageGallery
