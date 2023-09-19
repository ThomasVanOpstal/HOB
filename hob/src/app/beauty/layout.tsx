import Nav from '@/components/Nav'

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
