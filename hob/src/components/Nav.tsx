'use client'

import Link from 'next/link'
import NavDesk from './ui/NavDesk'
import { Button } from './ui/button'

const Nav = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 auto-cols-max justify-items-center p-8 bg-pink">
        <div className="flex items-center justify-center">
          <Link href="/" className="text-2xl font-medium ">
            House of beauty
          </Link>
        </div>
        <div>
          <NavDesk />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline">
            <Link href="/" className="text-xl font-medium">
              About me
            </Link>
          </Button>
          <Button variant="secondary">
            <Link href="/" className="text-xl font-medium">
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Nav
