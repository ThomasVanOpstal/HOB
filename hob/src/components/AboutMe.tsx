import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
const AboutMe = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col gap-2 justify-center items-center bg-brokenPink w-[100%] lg:w-[70%] xl:w-[60%]">
        <div className="basis-1/2 flex justify-center items-center flex-shrink-0">
          <CldImage
            src={'Beauty/LaurenFeet_qwkik0.jpg'}
            width={300}
            height={300}
            alt="Lauren de uitbaatster van House of beauty"
            className="flex-shrink-0 my-4"
          />
        </div>
        <div className="basis-1/2 flex flex-col items-center justify-center">
          <div className="mx-4 mb-4">
            <p className="font-medium text-xl desktop:text-2xl sm:w-[300px] md:w-[400px] lg:w-full mb-2 mx-4 sm:mx-0 mt-4">
              &quot;Hey!, Ik ben Lauren en ik ben de uitbaatster van House of
              Beauty. Ik ben een gediplomeerde schoonheidsspecialiste en heb een
              passie voor nagels en lichaamsverzorging. Ik hoop jullie snel te
              mogen verwelkomen in mijn salon.&quot;
            </p>
            <div className="flex justify-center msm:justify-normal mx-4 sm:mx-0 ">
              <Link href="/about">
                <Button
                  variant={'outline'}
                  className="font-medium text-xl mt-4 sm:mx-0 "
                >
                  About me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
