'use client'

import Link from 'next/link'
import NavDesk from './ui/NavDesk'
import { Button } from './ui/button'
import NavMobile from './ui/NavMobile'
import { useState, useEffect, useLayoutEffect } from 'react'
import { Heart, Home, Wine } from 'lucide-react'

const Nav = () => {
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
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink">
        <Heart size={150} color="red" fill="red" className="animate-bounce" />
        <div className="flex flex-row">
          <h1 className="font-medium text-xl">Neem er een glaasje bij ...</h1>
          <Wine size={30} fill="yellow" strokeWidth={1} className="pt-0" />
        </div>
      </div>
    )
  }
  return (
    <>
      {windowWidth > 1000 ? (
        <div className="grid grid-cols-3 content-center pt-8 pl-2 pr-2 md:p-8 bg-pink">
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
            <Button variant="secondary" size="sm">
              <Link href="/" className="text-xl font-medium">
                Contact
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 p-8 bg-pink">
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
      )}
    </>
  )
}

export default Nav
