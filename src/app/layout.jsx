import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='flex justify-around'>
          <div className='text-base font-semibold px-4 py-8 space-x-40'>
            <Link href={"/"}>Home</Link>
            <Link href={"/About"}>About</Link>
            <Link href={"/Project"}>Project</Link>
          </div>
        </div>

        {children}

      </body>
    </html>
  )
}
