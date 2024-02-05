import { Facebook, Home, Instagram } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface socialsProps {}

const Socials: FC<socialsProps> = ({}) => {
  return (
    <div className="flex flex-row">
      <Link href={'/'}>
        <Home size={20} color={'#ffe9d9'} className="mr-2 msm:mt-2" />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100094221503950'}>
        <Facebook size={20} color={'#B8D8EB'} className=" mr-2 msm:mt-2" />
      </Link>
      <Link href={'https://www.instagram.com/house_of_beauty_by_lauren/'}>
        <Instagram size={20} color={'#F9D4C6'} className=" mr-2 msm:mt-2" />
      </Link>
    </div>
  )
}

export default Socials
