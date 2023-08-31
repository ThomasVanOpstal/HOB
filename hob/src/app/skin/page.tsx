'use client'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname()
  const pathnames = pathname.split('/')
  const options: string[] = []
  let option: string = ''
  pathnames.forEach((path, index) => {
    index == 0 ? (option = '/') : (option += path + '/')
    options.push(option)
  })

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-brokenWhite">
          <div className="flex flex-row self-start ml-4 my-2">
            {pathnames.map((pathname, index) => (
              <Link
                href={{ pathname: options[index] }}
                key={index}
                className="font-medium text-sm"
              >
                {pathname === '' ? (
                  'Home'
                ) : (
                  <span>
                    &nbsp;{'>'}&nbsp;{pathname}
                  </span>
                )}{' '}
              </Link>
            ))}
          </div>
          <div className="w-[250px] flex items-center justify-center">
            <p className="font-medium text-3xl self-center">
              Leef met een stralende huid!
            </p>
          </div>
          <Image
            src={'/face.png'}
            width="200"
            height="200"
            alt={'Tekening van een gezicht'}
          />
          <ChevronDown size={30} className="top-5 animate-bounce lsm:hidden" />
        </div>
        <div className="bg-white flex flex-col">
          <div className="flex flex-col items-center justify-center">
            <h5 className="font-medium mt-2">
              {pathnames[pathnames.length - 1]} care
            </h5>
            <h1 className="font-medium text-2xl">Overzicht</h1>
            <hr className="border-black border-solid w-[90%]" />
            <div className="w-[95%]">
              <p className="font-medium ml-4 text-lg my-1">Ons aanbod</p>
              <ul className="list-disc ml-8">
                <li className="font-medium">Gelaatsverzorging</li>
                <li className="font-medium">DermaPlanning</li>
              </ul>
              <Button
                variant={'default'}
                className="ml-4 my-2 font-medium text-xl"
              >
                Contact
              </Button>
            </div>
            <Image
              src={'/laurenFeet.jpg'}
              width="200"
              height="200"
              alt={'Foto van een behandeling van de voeten'}
              className="my-2"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
