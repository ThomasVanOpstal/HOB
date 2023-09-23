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

interface ClickDialogProps extends React.ComponentPropsWithoutRef<'div'> {
  description: string
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
      <div className={className}>
        <AlertDialog>
          <AlertDialogTrigger>
            {' '}
            <Image
              src={frontImage.url}
              height={frontImage.h}
              width={frontImage.w}
              alt={frontImage.alt}
              className="rounded-md"
            />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogCancel className="self-right">
                <XCircle color="#F9D4C6" className="ml-auto" />
              </AlertDialogCancel>
              <AlertDialogTitle>
                <Image
                  src={dialogImage.url}
                  height={dialogImage.h}
                  width={dialogImage.w}
                  alt={dialogImage.alt}
                  className="w-full rounded-md"
                />
              </AlertDialogTitle>
              <AlertDialogDescription>{description}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter></AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  )
}

export default ClickDialog
