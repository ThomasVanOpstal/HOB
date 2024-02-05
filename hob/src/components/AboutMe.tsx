import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
const AboutMe = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center items-center bg-brokenPink">
        <div className="basis-1/2 flex justify-center flex-shrink-0">
          <CldImage
            src={'v1707125453/LaurenHandSliert_hiq9oy.png'}
            width={400}
            height={400}
            alt="Lauren de uitbaatster van House of beauty"
            className="flex-shrink-0"
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
