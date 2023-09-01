import Image from 'next/image'
import { Button } from './ui/button'
const AboutMe = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center items-center bg-pink">
        <div className="basis-1/2 flex justify-center flex-shrink-0">
          <Image
            src={'/LaurenHandSliert.png'}
            width={400}
            height={400}
            alt="Dit is Lauren de uitbaatster van House of beauty"
            className="flex-shrink-0"
          />
        </div>
        <div className="basis-1/2 flex flex-col items-center justify-center">
          <div className="mx-4">
            <p className="font-medium text-xl  sm:w-[300px] md:w-[400px] lg:w-full mb-2 mt-4">
              &quot;Hey!, Ik ben Lauren en ik ben de uitbaatster van House of
              Beauty. Ik ben een gediplomeerde schoonheidsspecialiste en heb een
              passie voor nagels en lichaamsverzorging. Ik hoop jullie snel te
              mogen verwelkomen in mijn salon.&quot;
            </p>
            <div className="sm:flex sm:items-center">
              <Button
                variant={'outline'}
                className="font-medium text-xl mt-4 mx-auto sm:mx-0 "
              >
                About me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
