import Image from 'next/image'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
type galleryProps = {
  className?: string
}
const Gallery = ({ className }: galleryProps) => {
  return (
    <div
      className={cn(
        'flex flex-row items-center justify-center w-full h-[300px]',
        className
      )}
    >
      <div className="flex flex-col items-center justify-center bg-brokenWhite basis-1/3 h-full">
        <Image
          src={'/face.png'}
          alt={'Drawing of face'}
          width={150}
          height={150}
          className="py-4"
        />
        <Button variant={'default'} className="font-medium text-xl">
          Skin
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center bg-darkBrown basis-1/3 h-full">
        <Image
          src={'/hand.png'}
          alt={'Drawing of hand'}
          width={180}
          height={180}
          className="py-4"
        />
        <Button variant={'outline_darkBrown'} className="font-medium text-xl">
          Beauty
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center bg-pink basis-1/3 h-full">
        <Image
          src={'/body.png'}
          alt={'Drawing of body'}
          width={100}
          height={100}
          className="py-4"
        />
        <Button variant={'secondary'} className="font-medium text-xl">
          Body
        </Button>
      </div>
    </div>
  )
}

export default Gallery
