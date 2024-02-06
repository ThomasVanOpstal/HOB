/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import ClickDialog from '@/components/ui/ClickDialog'
import { useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'
import { image } from '@/types/type'
import { motion as m } from 'framer-motion'
import { Bold, Heart } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
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
    url: 'About/basiliek_eywcgc.png',
    h: 75,
    w: 75,
    alt: 'Basiliek',
    bg: '#F9D4C6',
  }
  const d1: image = {
    name: 'Basiliek',
    url: 'About/fullBasiliek_wn4sek.jpg',
    h: 400,
    w: 400,
    alt: 'Basiliek',
    bg: '#F9D4C6',
  }
  const f2: image = {
    name: 'WZC sint-jozef',
    url: 'About/careCenters_otwzu2.jpg',
    h: 75,
    w: 75,
    alt: 'Rusthuis',
    bg: '#F9D4C6',
  }
  const d2: image = {
    name: 'Rusthuis',
    url: 'About/rusthuis_ng00dj.jpg',
    h: 300,
    w: 300,
    alt: 'Rusthuis',
    bg: '#F9D4C6',
  }
  const f3: image = {
    name: 'Frieten',
    url: 'About/fries_zcbr1w.jpg',
    h: 75,
    w: 75,
    alt: 'Frieten',
    bg: '#F9D4C6',
  }
  const d3: image = {
    name: 'Frieten',
    url: 'About/fries_zcbr1w.jpg',
    h: 300,
    w: 300,
    alt: 'Frieten',
    bg: '#F9D4C6',
  }
  const f4: image = {
    name: 'Nails',
    url: 'About/artNails_df0nxr.jpg',
    h: 75,
    w: 75,
    alt: 'Nagels',
    bg: '#F9D4C6',
  }
  const d4: image = {
    name: 'Nails',
    url: 'About/artNails_df0nxr.jpg',
    h: 300,
    w: 300,
    alt: 'Nagels',
    bg: '#F9D4C6',
  }
  const f5: image = {
    name: 'Triplets',
    url: 'About/Drieling_vert_bk39qj_vmsrec.jpg',
    h: 75,
    w: 75,
    alt: 'Drieling',
    bg: '#F9D4C6',
  }
  const d5: image = {
    name: 'Triplets',
    url: 'About/Drieling_hxicc2.jpg',
    h: 350,
    w: 350,
    alt: 'Drieling',
    bg: '#F9D4C6',
  }
  const descriptionBasiliek: React.ReactNode = (
    <p>
      Ik ben geboren in het prachtige Scherpenheuvel, een charmant stadje
      gelegen in het{' '}
      <span className="inline-block">
        <Heart fill="red" color="red" size={25} />
      </span>{' '}
      van{' '}
      <span className="inline-block">
        <Image src={'/belgium.png'} alt="België" width={25} height={25} />{' '}
      </span>{' '}
      . Scherpenheuvel staatbekend om zijn rijke geschiedenis, schilderachtige
      landschappenen vooral om zijn indrukwekkende basiliek, die een belangrijk
      bedevaartsoord is voor vele{' '}
      <span className="inline-block">
        <Image src={'/cross.png'} alt="België" width={25} height={25} />{' '}
      </span>{' '}
      . Je kan mij vinden op het adres Steenweg op Scherpenheuvel nr 40, 3271
      Scherpenheuvel. Als je na een bezoek aan House of beauty een droge keel
      hebt gekregen, kan je altijd nog iets gaan drinken in het centrum.
    </p>
  )
  const descriptionRusthuis: React.ReactNode = (
    <p>
      Als enthousiaste{' '}
      <span className="inline-block">
        {' '}
        <Image
          src={'/medical-team.png'}
          alt="Zorgverleners"
          width={30}
          height={30}
        />{' '}
      </span>{' '}
      met ervaring in rusthuizen, ontdekte ik de{' '}
      <span className="inline-block">
        {' '}
        <Image src={'/muscle.png'} alt="kracht" width={25} height={25} />{' '}
      </span>{' '}
      van zorg niet alleen in medische ondersteuning, maar ook in het bevorderen
      van het welzijn en de eigenwaarde van mensen. Als schoonheidsspecialiste
      richt ik me nu op het creëren van een benadering van zorg. Ik geloof dat{' '}
      <span className="inline-block">
        {' '}
        <Image
          src={'/makeup.png'}
          alt="Schoonheid"
          width={25}
          height={25}
        />{' '}
      </span>{' '}
      niet alleen van buiten komt, maar ook vanuit een gevoel van zelfzorg en
      eigenwaarde.
    </p>
  )
  const descriptionDrieling: React.ReactNode = (
    <p>
      Als trotse drieling ervaar ik de wereld op een unieke en levendige manier!
      Met twee geweldige{' '}
      <span className="inline-block">
        <Image src={'/twins.png'} alt="Tweelingen" width={30} height={30} />{' '}
      </span>{' '}
      die dezelfde geboortedag delen, vormen we een onverslaanbaar team. Maar
      het wordt nog beter - ik heb zelfs het geluk om een oudere{' '}
      <span className="inline-block">
        <Image src={'/boy.png'} alt="België" width={30} height={30} />{' '}
      </span>{' '}
      te hebben die onze gids is in het avontuur van het leven.
    </p>
  )
  const descriptionFrieten: React.ReactNode = (
    <p>
      Als trotse{' '}
      <span className="inline-block">
        <Image src={'/belgium.png'} alt="België" width={25} height={25} />{' '}
      </span>{' '}
      gaat mijn{' '}
      <span className="inline-block">
        <Heart fill="red" color="red" size={25} />
      </span>{' '}
      sneller kloppen bij de gedachte aan mijn absolute favoriet:{' '}
      <span className="inline-block">
        <Image src={'/french-fries.png'} alt="Frieten" width={25} height={25} />{' '}
      </span>{' '}
      Friet is voor mij niet zomaar een maaltijd; het is een nationaal erfgoed
      dat we met trots omarmen. De knapperige goudgele buitenkant, perfect in
      harmonie met de zachte, fluffy binnenkant - het is gewoonweg{' '}
      <span className="inline-block">
        {' '}
        <Image src={'/magic-wand.png'} alt="magic" width={25} height={25} />
      </span>
      . Of het nu een snelle hap is na het werk, een gezellige frietdag met
      vrienden, of een traktatie voor mezelf op een luie zondag, friet is altijd
      de juiste keuze.
    </p>
  )
  const descriptionNails: React.ReactNode = (
    <p>
      Als gepassioneerde schoonheidsspecialiste ben ik mijn reis begonnen met{' '}
      <span className="inline-block">
        {' '}
        <Image src={'/nail.png'} alt="nails" width={25} height={25} />
      </span>{' '}
      en sindsdien is mijn wereld van schoonheid alleen maar uitgebreid. Wat
      begon als een{' '}
      <span className="inline-block">
        <Heart fill="red" color="red" size={25} />
      </span>{' '}
      voor het creëren van prachtige nagelontwerpen, groeide al snel uit tot een
      veelzijdig avontuur in de wereld van schoonheid en zelfverzorging. Van
      wimperextensions tot gezichtsbehandelingen, heb ik mijn vaardigheden
      aangescherpt om een totaalervaring van schoonheid en welzijn te bieden aan
      mijn gewaardeerde klanten.
    </p>
  )
  return (
    <>
      <div>
        <div className="full-w bg-pink">
          <div className="flex flex-col w-[300px] msm:flex-row gap-2 msm:w-full  mx-auto msm:max-w-[1000px] min-h-[400px] ">
            <div className="basis-1/2 flex">
              <CldImage
                src={'v1707125739/faceRemBg_pwqifp.png'}
                width={400}
                height={400}
                alt="Tekening van een gezicht"
              />
            </div>
            <div className="basis-1/2 flex items-center justify-center">
              <p className="font-medium text-3xl mdd:text-5xl">
                Wie zit er achter
                <br /> House of beauty?
              </p>
            </div>
          </div>
        </div>
        <p className="font-medium text-4xl text-center my-8">5 weetjes</p>

        <div className="flex lsm:flex-row flex-col justify-center items-center">
          <div className="m-8">
            <m.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="mouse-pointer"
            >
              <ClickDialog
                description={descriptionRusthuis}
                dialogImage={d2}
                frontImage={f2}
                className="flex justify-center items-center hover:-translate-y-2 transition-all ease-in-out "
              />
            </m.div>
            <m.div
              initial={{ x: -100, opacity: 0 }}
              className="mouse-pointer"
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
          <div className="flex flex-col   ">
            <div className="self-end mx-auto">
              <m.div
                initial={{ x: -100, opacity: 0 }}
                className="mouse-pointer"
                animate={{ x: 0, opacity: 1 }}
              >
                <ClickDialog
                  description={descriptionBasiliek}
                  dialogImage={d1}
                  frontImage={f1}
                  className="mb-8 flex justify-center items-center hover:-translate-y-2 transition-all ease-in-out"
                />
              </m.div>
              <CldImage
                src={'About/Lauren_plcjzt.png'}
                height={250}
                width={250}
                alt="Lauren van opstal"
                className="pl-2 hidden lsm:block rounded-3xl"
              />
            </div>
          </div>

          <div className="m-8">
            <m.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="mouse-pointer"
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
              className="mouse-pointer"
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
