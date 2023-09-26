'use client'
import { CldImage } from 'next-cloudinary'

const CloudImage = ({ ...props }: any) => {
  return <CldImage {...props} />
}

export default CloudImage
