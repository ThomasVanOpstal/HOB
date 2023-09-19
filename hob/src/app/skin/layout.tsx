import Nav from '@/components/Nav'

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
