import Nav from '@/components/Nav'

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
