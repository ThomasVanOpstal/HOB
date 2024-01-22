/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import ClickDialog from '@/components/ui/ClickDialog'
import { useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'
import { image } from '@/types/type'
import { motion as m } from 'framer-motion'
import { Bold } from 'lucide-react'
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
    name: 'Rusthuis',
    url: '/rusthuis.jpg',
    h: 150,
    w: 150,
    alt: 'WZC sint-jan, rusthuis',
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
  const d3: image = {
    name: 'Frieten',
    url: '/fries.jpg',
    h: 100,
    w: 100,
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
  const d4: image = {
    name: 'Nails',
    url: '/artNails.jpg',
    h: 100,
    w: 100,
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
  const d5: image = {
    name: 'Triplets',
    url: '/triplets.jpg',
    h: 150,
    w: 150,
    alt: 'Triplets',
    bg: '#F9D4C6',
  }
  const descriptionBasiliek: React.ReactNode =
    'Ik ben geboren in het prachtige Scherpenheuvel, een charmant stadje gelegen in het hart van België. Scherpenheuvel staatbekend om zijn rijke geschiedenis, schilderachtige landschappenen vooral om zijn indrukwekkende basiliek, die een belangrijk bedevaartsoord is voor vele gelovigen. Je kan mij vinden op het adres Steenweg op Scherpenheuvel nr 40, 3271 Scherpenheuvel. Als je na een bezoek aan House of beauty een droge keel hebt gekregen, kan je altijd nog iets gaan drinken in het centrum.'
  const descriptionRusthuis: React.ReactNode = (
    <p>
      Als enthousiaste zorgkundige met ervaring in rusthuizen, ontdekte ik de
      kracht van zorg niet alleen in medische ondersteuning, maar ook in het
      bevorderen van het welzijn en de eigenwaarde van mensen. Als
      schoonheidsspecialiste richt ik me nu op het creëren van een benadering
      van zorg. Ik geloof dat schoonheid niet alleen van buiten komt, maar ook
      vanuit een gevoel van zelfzorg en eigenwaarde.
    </p>
  )
  const descriptionDrieling: React.ReactNode = (
    <p>
      Als trotse drieling ervaar ik de wereld op een unieke en levendige manier!
      Met twee geweldige broers die dezelfde geboortedag delen, vormen we een
      onverslaanbaar team. Maar het wordt nog beter - ik heb zelfs het geluk om
      een oudere broer te hebben die onze gids is in het avontuur van het leven.
    </p>
  )
  const descriptionFrieten: React.ReactNode = (
    <p>
      Als trotse Belg gaat mijn hart sneller kloppen bij de gedachte aan mijn
      absolute favoriet: <span className="font-bold">friet!</span> Friet is voor
      mij niet zomaar een maaltijd; het is een nationaal erfgoed dat we met
      trots omarmen. De knapperige goudgele buitenkant, perfect in harmonie met
      de zachte, fluffy binnenkant - het is gewoonweg
      <span className="font-bold"> magisch</span>. Of het nu een snelle hap is
      na het werk, een gezellige frietdag met vrienden, of een traktatie voor
      mezelf op een luie zondag, friet is altijd de juiste keuze.
    </p>
  )
  const descriptionNails: React.ReactNode = (
    <p>
      Als gepassioneerde schoonheidsspecialiste ben ik mijn reis begonnen met
      nagels en sindsdien is mijn wereld van schoonheid alleen maar uitgebreid.
      Wat begon als een liefde voor het creëren van prachtige nagelontwerpen,
      groeide al snel uit tot een veelzijdig avontuur in de wereld van
      schoonheid en zelfverzorging. Van wimperextensions tot
      gezichtsbehandelingen, heb ik mijn vaardigheden aangescherpt om een
      totaalervaring van schoonheid en welzijn te bieden aan mijn gewaardeerde
      klanten.
    </p>
  )
  return (
    <>
      <div>
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
        <p className="font-medium text-4xl text-center my-8">6 weetjes</p>

        <div className="flex lsm:flex-row flex-col justify-center items-center">
          <div>
            <m.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <ClickDialog
                description={descriptionRusthuis}
                dialogImage={d2}
                frontImage={f2}
                className="flex justify-center items-center hover:-translate-y-2 transition-all  ease-in-out"
              />
            </m.div>
            <m.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <ClickDialog
                description={descriptionDrieling}
                dialogImage={d5}
                frontImage={f5}
                className="flex justify-center items-center my-6 hover:-translate-y-2 transition-all  ease-in-out"
              />
            </m.div>
          </div>
          <div className="flex flex-col  ">
            <div className="self-end mx-auto">
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
                className="pl-2 hidden lsm:block"
              />
            </div>
          </div>

          <div>
            <m.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <ClickDialog
                description={descriptionFrieten}
                dialogImage={d3}
                frontImage={f3}
                className="flex justify-center items-center hover:-translate-y-2 transition-all  ease-in-out"
              />
            </m.div>
            <m.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <ClickDialog
                description={descriptionNails}
                dialogImage={d4}
                frontImage={f4}
                className="flex justify-center items-center my-6 hover:-translate-y-2 transition-all  ease-in-out"
              />
            </m.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
