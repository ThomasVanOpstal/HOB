'use client'
import { cn } from '@/lib/utils'
import { motion as m } from 'framer-motion'
import { ChevronDown, Columns } from 'lucide-react'
import { MutableRefObject, useRef, useState } from 'react'
import Image from 'next/image'
import CloudImage from '../CloudImage'
import { SearchResult, image } from '@/types/type'
import { CldImage } from 'next-cloudinary'
interface ImageGalleryProps {
  className?: string
  images: image[]
}

const ImageGallery = ({ className, images }: ImageGalleryProps) => {
  const gallery = useRef(null)
  const [showAllImages, setShowAllImages] = useState<boolean>(false)

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

  const MAX_COLUMNS = 4
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => {
      return idx % MAX_COLUMNS === colIndex
    })
  }
  return (
    <>
      <div>
        <div
          id="gallery"
          ref={gallery}
          className={cn(
            'justify-center min-h-[300px] w-auto msm:mx-4 md:w-[800px] overflow-y-hidden',
            showAllImages ? 'h-auto' : 'h-[300px]'
          )}
        >
          <div className="grid grid-cols-1 msm:grid-cols-3 gap-4 w-[95%] xsm:w-[300px] mx-auto msm:mx-0 msm:w-auto">
            {[getColumns(0), getColumns(1), getColumns(2)].map((colum, i) => (
              <div key={i} className="flex flex-col gap-4">
                {colum.map((image, i) => (
                  <CldImage
                    src={image.url}
                    alt={image.alt}
                    width={400}
                    height={400}
                    key={i}
                    placeholder="blur"
                    blurDataURL={image.blurDataUrl}
                    priority
                    className="rounded-md "
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    style={{ transform: 'translate3d(0, 0, 0)' }}
                  />
                ))}
              </div>
            ))}
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
