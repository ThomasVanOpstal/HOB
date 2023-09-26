'use client'

import { Home } from 'lucide-react'
import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'
import NavDesk from './ui/NavDesk'
import NavMobile from './ui/NavMobile'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface navProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: React.ComponentProps<typeof Button>['variant']
}

const Nav = ({ className, variant }: navProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    setWindowWidth(window.innerWidth)

    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    // Add resize event listener
    window.addEventListener('resize', handleResize)

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div
        className={cn(
          'hidden lg:grid grid-cols-3 content-center pt-8 pl-2 pr-2 md:p-8 opacity-100 ',
          className
        )}
      >
        <div className="flex items-center justify-center justify-self-start">
          <Link href="/" className="text-2xl font-medium ">
            House of beauty
          </Link>
        </div>
        <div className="flex justify-self-center items-center flex-wrap">
          {' '}
          <NavDesk />
        </div>
        <div className="flex items-center justify-self-end">
          <Button variant={variant || 'default'} size="sm">
            <Link href="/" className="text-xl font-medium">
              Contact
            </Link>
          </Button>
        </div>
      </div>

      <div className={cn('grid grid-cols-2 gap-2 p-8 lg:hidden', className)}>
        <div className="flex flex-row gap-4 items-center justify-start flex-shrink-0">
          <NavMobile />
          <Link href="/" className="text-2xl font-medium flex-shrink-0">
            House of beauty
          </Link>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Link href="/" className="text-xl font-medium">
            <Home className="w-6 h-6 hidden xsm:block" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Nav
