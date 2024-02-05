'use client'
import { Facebook, Home, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'

const Footer = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="flex flex-col msm:flex-row msm:justify-start smd:justify-center max-h-[130px] bg-pink">
          <div className="max-w-[230px] ml-4 mt-4 msm:m-8">
            <p className="font-medium text-xl mb-1">House of beauty</p>
            <p className="font-light text-xs">
              Ontdek kwaliteit bij House of Beauty. Laat ons je verwennen en
              stralend doen voelen!
            </p>
          </div>
          <div className="flex flex-row msm:flex-col ml-4 my-4 msm:m-8 ">
            <p className="font-medium text-lg hidden msm:block">Find me</p>
            <div className="flex flex-row">
              <Link href={'/'}>
                <Home size={20} className="mr-2 msm:mt-2" />
              </Link>
              <Link
                href={'https://www.facebook.com/profile.php?id=100094221503950'}
              >
                <Facebook size={20} className=" mr-2 msm:mt-2" />
              </Link>
              <Link
                href={'https://www.instagram.com/house_of_beauty_by_lauren/'}
              >
                <Instagram size={20} className=" mr-2 msm:mt-2" />
              </Link>
            </div>
          </div>

          <div className="lg:flex flex-col m-8 self-center hidden pt-6">
            <div className="flex">
              <Phone size={20} className="mr-8" />
              <p>0479369178</p>
            </div>
            <div className="flex">
              <MapPin size={20} className="mr-8 flex-shrink-0" />
              <p>Steenweg op scherpenheuvel 40, 2371 Zichem</p>
            </div>
            <div className="flex">
              <Mail size={20} className="mr-8" />
              <p>Lauren.vanopstal@gmail.com</p>
            </div>
          </div>
          <div className="grow smd:flex items-center justify-center hidden">
            <CldImage
              src={'v1707125739/faceRemBg_pwqifp.png'}
              alt="drawing of face"
              width={125}
              height={125}
              className="self-center"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
