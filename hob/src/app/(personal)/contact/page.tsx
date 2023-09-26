import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <div className="flex flex-col mdd:flex-row w-full jusitfy-center items-center md:h-[600px] px-2 bg-pink overflow-x-hidden">
      <div className="pt-4 md:mr-4 basis-1/2 order-2 flex flex-col sm:justify-center sm:items-center justify-end ">
        <div className="w-[250px] xsm:w-[300px] sm:w-[475px]">
          <div className="flex flex-row items-center mt-3 sm:mt-8 mb-8 mdd:mb-20 font-medium text-base xsm:text-xl sm:text-2xl desktop:text-3xl">
            <Phone
              className="mr-2 sm:flex-shrink-0"
              size={35}
              color="#f2c5b5"
              fill="#FFF4EC"
            />{' '}
            +32 472 25 65 57
          </div>
          <div className="flex flex-row items-center mb-8 mdd:mb-20 font-medium text-base xsm:text-xl sm:text-2xl desktop:text-3xl">
            <Mail
              className="mr-2 flex-shrink-0"
              size={30}
              color="#f2c5b5"
              fill="#FFF4EC"
            />{' '}
            HouseOfBeauty@gmail.com
          </div>
          <div className="flex flex-row items-center mb-8 mdd:mb-20 font-medium text-base xsm:text-xl sm:text-2xl desktop:text-3xl">
            <MapPin
              className="mr-2 flex-shrink-0"
              size={30}
              color="#f2c5b5"
              fill="#FFF4EC"
            />{' '}
            Steenweg op scherpenheuvel 40,
            <br /> 3271 Zichem
          </div>
        </div>
      </div>
      <div className="w-[250px] xsm:w-[300px] sm:w-[350px] order-1 xs:w-[250px] sm:basis-1/2 flex-shrink-0 md:flex md:justify-end md:self-end ">
        <Image
          src={'/telefoon.png'}
          width={450}
          height={450}
          alt="Vrouw aan het bellen"
          className="flex-shrink-0 "
        />
      </div>
    </div>
  )
}

export default page
