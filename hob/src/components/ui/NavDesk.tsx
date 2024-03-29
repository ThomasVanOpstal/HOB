import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'

const NavDesk = () => {
  return (
    <>
      <NavigationMenu.Root className="relative z-[1] flex justify-center">
        <NavigationMenu.List className="m-0 flex list-none rounded-[6px] p-1">
          {/* beauty */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-xl font-medium  leading-none outline-none focus:shadow-[0_0_0_2px]">
              <Link href={'/beauty'}>Beauty</Link>{' '}
              <ChevronDown
                className="relative h-3 w-3 top-[1px] transition-transform ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-1/2 transform -translate-x-1/2 w-full sm:w-auto">
              <ul className="one m-0 grid list-none gap-x-[5px] p-[22] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]  bg-brokenWhite mt-3 rounded-md">
                <li className="row-span-4 grid">
                  <NavigationMenu.Link asChild>
                    <a
                      className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-center rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                      href="/beauty"
                    >
                      <CldImage
                        alt="Tekening hand"
                        src={'/hand_igki2c.png'}
                        width={700}
                        height={700}
                      />
                    </a>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <Link
                    href="/beauty/pedicure_&_lakken"
                    passHref
                    legacyBehavior
                  >
                    <NavigationMenu.Link
                      className="text-xl font-medium flex flex-col 
                    h-full w-full select-none rounded-[6px] bg-gradient-to-b bg-brokenWhite p-[15px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    >
                      <div className="flex flex-row items-center ml-0 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 ">
                        Pedicure & lakken
                        <ChevronRight
                          className="h-3 w-3 ml-1 flex-shrink-0 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                          aria-hidden
                        />
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        Verzorg je voeten en nagels met een pedicure en een mooi
                        kleurtje.
                      </p>
                    </NavigationMenu.Link>
                  </Link>
                </li>

                <li>
                  <Link href="/beauty/gelnagels" passHref legacyBehavior>
                    <NavigationMenu.Link
                      className="text-xl font-medium flex flex-col 
                    h-full w-full select-none rounded-[6px] bg-gradient-to-b bg-brokenWhite p-[15px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    >
                      <div className="flex flex-row items-center ml-0 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 ">
                        Gelnagels{' '}
                        <ChevronRight
                          className="h-3 w-3 ml-1 flex-shrink-0 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                          aria-hidden
                        />
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        Subtiele elegantie: Ontdek prachtige Babyboom en French
                        style gelnagels nu!
                      </p>
                    </NavigationMenu.Link>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/beauty/wimpers_&_wenkbrauwen"
                    passHref
                    legacyBehavior
                  >
                    <NavigationMenu.Link
                      className="text-xl font-medium flex flex-col 
                    h-full w-full select-none rounded-[6px] bg-gradient-to-b p-[15px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    >
                      <div className="flex flex-row items-center ml-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 ">
                        Wimpers & <br /> wenkbrauwen verven
                        <ChevronRight
                          className="h-3 w-3 flex-shrink-0"
                          aria-hidden
                        />
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        Accentueer je stijl: Perfecte wimpers en
                        wenkbrauwkleuring, onweerstaanbaar verleidelijk!
                      </p>
                    </NavigationMenu.Link>
                  </Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          {/* Skin */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-xl font-medium  leading-none outline-none focus:shadow-[0_0_0_2px]">
              <Link href={'/skin'}>Skin</Link>{' '}
              <ChevronDown
                className="relative h-3 w-3 top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-1/2 transform -translate-x-1/2 w-full rounded-md sm:w-auto">
              <ul className="one m-0 grid list-none gap-x-[5px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr] bg-brokenWhite mt-3 rounded-md">
                <li className="row-span-3 grid">
                  <NavigationMenu.Link asChild>
                    <a
                      className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                      href="/"
                    >
                      <CldImage
                        alt="Tekening gezicht"
                        src={'/face_vhgkdo.png'}
                        width={800}
                        height={800}
                      />
                    </a>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <Link href="/skin/gelaatsverzorging" passHref legacyBehavior>
                    <NavigationMenu.Link
                      className="text-xl font-medium flex flex-col 
                    h-full w-full select-none rounded-[6px] bg-gradient-to-b p-[15px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    >
                      <div className="flex flex-row items-center ml-0 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105">
                        Gelaatsverzorging{' '}
                        <ChevronRight
                          className="h-3 w-3 ml-1 flex-shrink-0"
                          aria-hidden
                        />
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        Verwen je huid: Stralende gelaatsverzorging voor een
                        tijdloze schoonheid!
                      </p>
                    </NavigationMenu.Link>
                  </Link>
                </li>
                <li>
                  <Link href="/skin/dermaplanning" passHref legacyBehavior>
                    <NavigationMenu.Link
                      className="text-xl font-medium flex flex-col 
                    h-full w-full select-none rounded-[6px] bg-gradient-to-b p-[15px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    >
                      <div className="flex flex-row items-center ml-0 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105">
                        Dermaplanning{' '}
                        <ChevronRight
                          className="h-3 w-3 ml-1 flex-shrink-0"
                          aria-hidden
                        />
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        Ontdek heldere, stralende huid met onze professionele
                        dermaplanning behandeling!
                      </p>
                    </NavigationMenu.Link>
                  </Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          {/* Body */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-xl font-medium  leading-none outline-none focus:shadow-[0_0_0_2px]">
              <Link href={'/body'}>Body</Link>{' '}
              <ChevronDown
                className="relative h-3 w-3 top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className=" absolute left-1/2 transform -translate-x-1/2 w-full sm:w-auto">
              <ul className="one m-0 grid list-none gap-x-[5px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr] bg-brokenWhite mt-3 rounded-md">
                <li className="row-span-3 grid">
                  <NavigationMenu.Link asChild>
                    <a
                      className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                      href="/"
                    >
                      <CldImage
                        alt="Tekening lichaam"
                        src={'/body_wthv6n.png'}
                        width={300}
                        height={300}
                      />
                    </a>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <Link href="/body/massage" passHref legacyBehavior>
                    <NavigationMenu.Link
                      className="text-xl font-medium flex flex-col 
                    h-full w-full select-none rounded-[6px] bg-gradient-to-b p-[15px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    >
                      <div className="flex flex-row items-center ml-0 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105">
                        Massage{' '}
                        <ChevronRight
                          className="h-3 w-3 ml-1 flex-shrink-0"
                          aria-hidden
                        />
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        Ontspan en verjong: Geniet van onze rustgevende,
                        herstellende massagebehandelingen!
                      </p>
                    </NavigationMenu.Link>
                  </Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          {/* About me */}
          <NavigationMenu.Item>
            <Link href="/about" passHref legacyBehavior>
              <NavigationMenu.Link className="group flex flex-shrink-0 select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-xl font-medium hover:text-brokenWhite leading-none outline-none focus:shadow-[0_0_0_2px]">
                <div className="mr-1 ">About</div>
              </NavigationMenu.Link>
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-brokenWhite" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  )
}

export default NavDesk
