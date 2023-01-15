import './globals.css'
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
      <Script data-goatcounter="https://sakib.goatcounter.com/count"
              async src="//gc.zgo.at/count.js"/>
    </html>
  )
}
