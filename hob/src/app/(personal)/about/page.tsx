'use client'
import Image from 'next/image'
import { FC } from 'react'
import { motion as m } from 'framer-motion'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className="mt-6 mb-8">
        <div className="flex flex-col w-[300px] msm:flex-row gap-2 msm:w-full items-center justify-center mx-auto msm:max-w-[1000px] ">
          <div className="basis-1/2 flex items-center justify-center">
            <Image
              src={'/women.png'}
              width={400}
              height={400}
              alt="Women with handgloves"
            />
          </div>
          <div className="basis-1/2 flex items-center">
            <p className="font-medium text-3xl mdd:text-5xl">
              Wie zit er achter
              <br /> House of beauty?
            </p>
          </div>
        </div>
        <div className="relative flex h-[500px]">
          <div className="self-end mx-auto">
            <m.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="mb-8"
            >
              <Image
                src={'/basiliek.png'}
                height={75}
                width={75}
                alt="Church"
                className="mx-auto rounded-md hover:-translate-y-2 transition-transform"
              />
            </m.div>
            <Image
              src={'/womenCrossedArms.png'}
              height={200}
              width={200}
              alt="Women with crossed arms"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
