import Image from 'next/image'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
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
        <CldImage
          src={'/face_vhgkdo.png'}
          alt={'Drawing of face'}
          width={150}
          height={150}
          className="py-4"
        />
        <Link href={'/skin'}>
          <Button variant={'default'} className="font-medium text-xl">
            Skin
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center bg-darkBrown basis-1/3 h-full">
        <CldImage
          src={'/hand_igki2c.png'}
          alt={'Drawing of hand'}
          width={180}
          height={180}
          className="py-4"
        />
        <Link href="/beauty">
          <Button variant={'outline_darkBrown'} className="font-medium text-xl">
            Beauty
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center bg-pink basis-1/3 h-full">
        <CldImage
          src={'/body_wthv6n.png'}
          alt={'Drawing of body'}
          width={100}
          height={100}
          className="py-4"
        />
        <Link href={'/body'}>
          <Button variant={'secondary'} className="font-medium text-xl">
            Body
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Gallery
