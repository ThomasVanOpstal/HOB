import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  Check,
  ChevronRight,
  Globe2,
  Home,
  Menu,
  MoreHorizontal,
  PhoneCall,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavMobile = ({}) => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="inline-flex items-center justify-cente"
            aria-label="menu full of options"
          >
            <Menu size={20} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className=" xsm:min-w-[120px] sm:min-w-[220px] ml-5 bg-brokenWhite rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={15}
          >
            <DropdownMenu.Label className="pl-2 text-sm font-normal leading-[25px]">
              Aanbod
            </DropdownMenu.Label>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:bg-violet9 data-[highlighted]:data-[state=open]:text-violet1">
                <div className=" group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                  <ChevronRight size={15} />
                </div>
                Beauty
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  className="w-[150px] xs:min-w-[220px] bg-brokenWhite rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                  sideOffset={2}
                  alignOffset={-5}
                >
                  <DropdownMenu.Item className="group text-[13px] hover:translate-x-1 ease-in-out leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative selection:select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                    <ChevronRight size={15} strokeWidth={1} />
                    <Link href="/beauty/pedicure_&_lakken">
                      Pedicure & lakken
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item className="group text-[13px] hover:translate-x-1 ease-in-out leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative selection:select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                    <ChevronRight size={15} strokeWidth={1} />
                    <Link href="/beauty/Gelnagels">Gelnagels</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="group text-[13px] hover:translate-x-1 ease-in-out leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                    <ChevronRight size={15} strokeWidth={1} />
                    <Link href="/beauty/wimpers_&_wenkbrauwen_lakken">
                      Wimpers & wenkbrauwen lakken
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:bg-violet9 data-[highlighted]:data-[state=open]:text-violet1">
                <div className=" group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                  <ChevronRight size={15} />
                </div>
                Skin
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  className="min-w-[220px] bg-brokenWhite rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                  sideOffset={2}
                  alignOffset={-5}
                >
                  <DropdownMenu.Item className="group text-[13px] hover:translate-x-1 ease-in-out leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                    <ChevronRight size={15} strokeWidth={1} />
                    <Link href="/skin/gelaatsverzorging">
                      Gelaatsverzorging
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="group text-[13px] hover:translate-x-1 ease-in-out leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                    <ChevronRight size={15} strokeWidth={1} />
                    <Link href="/skin/dermaplanning">DermaPlanning</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:bg-violet9 data-[highlighted]:data-[state=open]:text-violet1">
                <div className=" group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                  <ChevronRight size={15} />
                </div>
                Body
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  className="min-w-[220px] bg-brokenWhite rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                  sideOffset={2}
                  alignOffset={-5}
                >
                  <DropdownMenu.Item className="group text-[13px] hover:translate-x-1 ease-in-out leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                    <ChevronRight size={15} strokeWidth={1} />
                    <Link href="/">Massage</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
            <DropdownMenu.Separator className="h-[1px] m-[5px] bg-pink" />
            <DropdownMenu.Item className="group text-[13px] hover:translate-x-1 font-normal text-sm leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
              <Home size={15} strokeWidth={1} />
              <Link href="/" className="ml-1">
                Contact
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group text-[13px] hover:translate-x-1 font-normal text-sm leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative  select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
              <Globe2 size={15} strokeWidth={1} />
              <Link href="/" className="ml-1">
                About me
              </Link>
            </DropdownMenu.Item>

            <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

            <DropdownMenu.Arrow className="fill-white" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  )
}

export default NavMobile
