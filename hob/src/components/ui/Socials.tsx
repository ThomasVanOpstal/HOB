import { Facebook, Home, Instagram } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface socialsProps {}

const Socials: FC<socialsProps> = ({}) => {
  return (
    <div className="flex flex-row">
      <Link href={''}>
        <Home size={20} color={'#FFF4EC'} className="mr-2 msm:mt-2" />
      </Link>
      <Link href={''}>
        <Facebook size={20} color={'#B8D8EB'} className=" mr-2 msm:mt-2" />
      </Link>
      <Link href={''}>
        <Instagram size={20} color={'#F9D4C6'} className=" mr-2 msm:mt-2" />
      </Link>
    </div>
  )
}

export default Socials
