import Nav from '@/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skin',
  description:
    'Alles voor een stralende huid! van gelaatsverzorging to dermaplanning, van huidverbetering tot huidverjonging. Je kan het allemaal vinden bij House of beauty. Ontdek de schoonheid in jezelf!',
}

export default function SkinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav className="bg-brokenWhite" variant={'secondary'} />
      <div>{children}</div>
    </>
  )
}
