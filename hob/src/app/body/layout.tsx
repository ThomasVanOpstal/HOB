import Nav from '@/components/Nav'
import Head from 'next/head'
import Script from 'next/script'

export default function BodyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script src="@/styles/styles.css" />
      <Nav className="bg-pink" variant={'default'} />
      <div>{children}</div>
    </>
  )
}
