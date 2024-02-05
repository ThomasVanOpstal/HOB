import { m } from 'framer-motion'
import { XCircle } from 'lucide-react'
import { FC } from 'react'
import {
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialogDescription,
} from './alert-dialog'
import Image from 'next/image'
import { image } from '@/types/type'
import { CldImage } from 'next-cloudinary'

interface ClickDialogProps extends React.ComponentPropsWithoutRef<'div'> {
  description: React.ReactNode
  frontImage: image
  dialogImage: image
}

const ClickDialog: FC<ClickDialogProps> = ({
  className,
  frontImage,
  dialogImage,
  description,
}) => {
  return (
    <>
      <div className={className} onClick={() => {}}>
        <AlertDialog>
          <AlertDialogTrigger>
            {' '}
            <CldImage
              src={frontImage.url}
              height={frontImage.h}
              width={frontImage.w}
              alt={frontImage.alt}
              className="rounded-full"
            />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogCancel className="self-right">
                <XCircle color="#F9D4C6" className="ml-auto" />
              </AlertDialogCancel>
              <AlertDialogTitle>
                <CldImage
                  src={dialogImage.url}
                  height={dialogImage.h}
                  width={dialogImage.w}
                  alt={dialogImage.alt}
                  className="w-full rounded-md"
                />
              </AlertDialogTitle>
              <AlertDialogDescription className="font-thin">
                {description}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter></AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  )
}

export default ClickDialog
