/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import ClickDialog from '@/components/ui/ClickDialog'
import { useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'
import { image } from '@/types/type'
import { motion as m } from 'framer-motion'
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])
  const f1: image = {
    name: 'Basiliek',
    url: '/basiliek.png',
    h: 75,
    w: 75,
    alt: 'Basiliek',
    bg: '#F9D4C6',
  }
  const d1: image = {
    name: 'Basiliek',
    url: '/fullBasiliek.jpg',
    h: 150,
    w: 150,
    alt: 'Basiliek',
    bg: '#F9D4C6',
  }
  const f2: image = {
    name: 'WZC sint-jozef',
    url: '/WZC.png',
    h: 75,
    w: 75,
    alt: 'WZC sint-jan, rusthuis',
    bg: '#F9D4C6',
  }
  const d2: image = {
    name: 'Basiliek',
    url: '/fullBasiliek.jpg',
    h: 150,
    w: 150,
    alt: 'Basiliek',
    bg: '#F9D4C6',
  }
  const f3: image = {
    name: 'Frieten',
    url: '/fries.jpg',
    h: 75,
    w: 75,
    alt: 'Frieten',
    bg: '#F9D4C6',
  }
  const f4: image = {
    name: 'Nails',
    url: '/artNails.jpg',
    h: 75,
    w: 75,
    alt: 'Nagels',
    bg: '#F9D4C6',
  }
  const f5: image = {
    name: 'Triplets',
    url: '/triplets.jpg',
    h: 75,
    w: 75,
    alt: 'Triplets',
    bg: '#F9D4C6',
  }
  const descriptionBasiliek: string =
    'Ik ben geboren in het prachtige Scherpenheuvel, een charmant stadje gelegen in het hart van België. Scherpenheuvel staatbekend om zijn rijke geschiedenis, schilderachtige landschappenen vooral om zijn indrukwekkende basiliek, die een belangrijk bedevaartsoord is voor vele gelovigen. Je kan mij vinden op hetadres Steenweg op Scherpenheuvel nr 40, 3271 Scherpenheuvel. Als je na een bezoek aan House of beauty een droge keel hebt gekregen, kan je altijd nog iets gaan drinken in het centrum.'
  const descriptionRusthuis: string = ''
  return (
    <>
      <div className="mb-8">
        <div className="full-w bg-pink">
          <div className="flex flex-col w-[300px] msm:flex-row gap-2 msm:w-full items-center justify-center mx-auto msm:max-w-[1000px] min-h-[400px] ">
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
        </div>
        <div className="relative flex ">
          <div className="self-end mx-auto">
            <p className="font-medium text-4xl text-center my-8">6 weetjes</p>
            <m.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <ClickDialog
                description={descriptionBasiliek}
                dialogImage={d1}
                frontImage={f1}
                className="mb-8 flex justify-center items-center hover:-translate-y-2 transition-all ease-in-out"
              />
            </m.div>
            <Image
              src={'/womenCrossedArms.png'}
              height={200}
              width={200}
              alt="Women with crossed arms"
              className="pl-2"
            />
          </div>
          <m.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <ClickDialog
              description={descriptionBasiliek}
              dialogImage={d2}
              frontImage={f2}
              className="absolute left-[30%] top-[30%] bottom-50 flex justify-center items-center hover:-translate-y-2 transition-all  ease-in-out"
            />

            <ClickDialog
              description={descriptionBasiliek}
              dialogImage={d1}
              frontImage={f5}
              className="absolute left-[25%] top-[65%] bottom-50 flex justify-center items-center hover:-translate-y-2 transition-all  ease-in-out"
            />
            <ClickDialog
              description={descriptionBasiliek}
              dialogImage={d2}
              frontImage={f3}
              className="absolute right-[30%] top-[30%] bottom-50 flex justify-center items-center hover:-translate-y-2 transition-all  ease-in-out"
            />

            <ClickDialog
              description={descriptionBasiliek}
              dialogImage={d1}
              frontImage={f4}
              className="absolute right-[25%] top-[65%] bottom-50 flex justify-center items-center hover:-translate-y-2 transition-all  ease-in-out"
            />
          </m.div>
        </div>
      </div>
    </>
  )
}

export default page
