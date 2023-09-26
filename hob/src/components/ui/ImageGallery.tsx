'use client'
import { cn } from '@/lib/utils'
import { SearchResult } from '@/server'
import { motion as m } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { MutableRefObject, useRef, useState } from 'react'
import CloudImage from '../CloudImage'
interface ImageGalleryProps {
  className?: string
  images: SearchResult[]
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
            'justify-center min-h-[400px] w-auto mx-4 md:w-[800px] overflow-y-hidden',
            showAllImages ? 'h-auto' : 'h-[400px]'
          )}
        >
          <div className="grid grid-cols-4 gap-4">
            {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
              (colum, i) => (
                <div key={i} className="flex flex-col gap-4">
                  {colum.map((image, i) => (
                    <CloudImage
                      src={image.public_id}
                      alt="Something"
                      width={400}
                      height={400}
                      key={i}
                    />
                  ))}
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
