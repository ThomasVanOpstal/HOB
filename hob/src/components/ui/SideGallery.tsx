import { cn } from '@/lib/utils'
import { image } from '@/types/type'
import { CldImage } from 'next-cloudinary'
type galleryProps = {
  className?: string
  images: image[]
}
const SideGallery = ({ className, images }: galleryProps) => {
  return (
    <div className={cn('flex flex-row gap-2', className)}>
      {images.map((image, index) => (
        <CldImage
          src={image.url}
          alt={image.alt}
          width={image.w}
          height={image.h}
          className="py-4 rounded-lg"
          key={index}
        />
      ))}
    </div>
  )
}

export default SideGallery
