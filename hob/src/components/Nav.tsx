'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
interface ListItemProps {
  href: string
  children: React.ReactNode
  className?: string
}
const Nav = () => {
  const NLink = ({ href, ...props }: ListItemProps) => {
    return (
      <Link href={href} passHref legacyBehavior>
        <NavigationMenu.Link {...props} />
        {props.children}
      </Link>
    )
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4 auto-cols-max justify-items-center p-8 bg-pink">
        <div className="flex items-center justify-center">
          <Link href="/" className="text-2xl font-medium ">
            House of beauty
          </Link>
        </div>
        <div>
          <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
            <NavigationMenu.List className="m-0 flex list-none rounded-[6px] bg-pink p-1">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-xl font-medium  leading-none outline-none focus:shadow-[0_0_0_2px]">
                  Beauty{' '}
                  <ChevronDown
                    className="relative h-3 w-3 top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute left-1/2 transform -translate-x-1/2 w-full sm:w-auto">
                  <ul className="one m-0 grid list-none gap-x-[5px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                    <li>
                      <Link href="/docs" passHref legacyBehavior>
                        <NavigationMenu.Link
                          className="text-xl font-medium flex flex-col 
                    h-full w-full select-none rounded-[6px] bg-gradient-to-b p-[15px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                        >
                          <div className="flex flex-row items-center ml-0">
                            Pedicure & lakken{' '}
                            <ChevronRight
                              className="h-3 w-3 ml-1 flex-shrink-0"
                              aria-hidden
                            />
                          </div>
                          <p className="text-mauve4 text-[14px] leading-[1.3]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                          </p>
                        </NavigationMenu.Link>
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs" passHref legacyBehavior>
                        <NavigationMenu.Link
                          className="text-xl font-medium flex flex-col 
                    h-full w-full select-none rounded-[6px] bg-gradient-to-b p-[15px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                        >
                          <div className="flex flex-row items-center ml-0">
                            Gellak tenen{' '}
                            <ChevronRight
                              className="h-3 w-3 ml-1 flex-shrink-0"
                              aria-hidden
                            />
                          </div>
                          <p className="text-mauve4 text-[14px] leading-[1.3]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                          </p>
                        </NavigationMenu.Link>
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs" passHref legacyBehavior>
                        <NavigationMenu.Link
                          className="text-xl font-medium flex flex-col 
                    h-full w-full select-none rounded-[6px] bg-gradient-to-b p-[15px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                        >
                          <div className="flex flex-row items-center ml-0">
                            Wimpers & wenkbrauwen lakken{' '}
                            <ChevronRight
                              className="h-3 w-3 ml-1 flex-shrink-0"
                              aria-hidden
                            />
                          </div>
                          <p className="text-mauve4 text-[14px] leading-[1.3]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                          </p>
                        </NavigationMenu.Link>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>

        <div className="flex items-center justify-center">
          <Link href="/" className="text-xl font-medium">
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Nav
