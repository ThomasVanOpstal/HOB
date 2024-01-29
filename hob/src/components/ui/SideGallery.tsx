import Image from 'next/image'
import { cn } from '@/lib/utils'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { image } from '@/types/type'
type galleryProps = {
  className?: string
  images: image[]
}
const SideGallery = ({ className }: galleryProps) => {
  return (
    <div className={cn('flex flex-row ', className)}>
      <CldImage
        src={'/face_vhgkdo.png'}
        alt={'Drawing of face'}
        width={200}
        height={200}
        className="py-4"
      />
      <CldImage
        src={'/hand_igki2c.png'}
        alt={'Drawing of hand'}
        width={200}
        height={200}
        className="py-4"
      />
      <CldImage
        src={'/body_wthv6n.png'}
        alt={'Drawing of body'}
        width={200}
        height={200}
        className="py-4"
      />
    </div>
  )
}

export default SideGallery
