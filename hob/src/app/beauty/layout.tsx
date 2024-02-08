import Nav from '@/components/Nav'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Beauty',
  description:
    'Alles wat je nodig hebt om er op je best uit te zien en je goed te voelen, kan je hier vinden. Van gelaatsverzorging tot massage, van pedicure tot gelnagels, van wimpers tot wenkbrauwen. Ontdek de schoonheid in jezelf!',
}
export default function SkinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav className="bg-darkBrown" variant={'outline'} />
      <div>{children}</div>
    </>
  )
}
