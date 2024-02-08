import Nav from '@/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Body',
  description:
    'De beste schouder-, nek- en rugmassage kan je vinden bij House of Beauty. Wij zorgen ervoor dat je volledig ontspannen en verfrist naar huis gaat.',
}
export default function BodyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav className="bg-pink" variant={'default'} />
      <div>{children}</div>
    </>
  )
}
