import { Label } from '@radix-ui/react-dropdown-menu'
import { Input } from 'postcss'
import { Button } from './button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'
import { Info } from 'lucide-react'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'

export function InfoDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <Info size={15} className="cursor-pointer" />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Uitleg over de verschillende lengtes</DialogTitle>
          </DialogHeader>
          <div className="flex flex-row gap-2">
            <CldImage
              src={'Beauty/NailExample_ezzfka.png'}
              width={400}
              height={400}
              alt={'Voorbeeld nagel lengtes'}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
