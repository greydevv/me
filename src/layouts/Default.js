import Navbar from 'components/Navbar'
import Head from 'next/head'

export default function Default({ noNavbar, children }) {
  return (
    <div className="w-full bg-light">
        <Head>
          <title>Greyson Murray</title>
          <link rel="icon" href="favicon.ico" />
        </Head>
        <div className="grid grid-rows-[auto_1fr] gap-y-10 md:gap-y-20 w-full h-screen overflow-y-scroll">
          { !noNavbar &&
            <Navbar className="z-50 sticky left-0 top-0 w-full row-start-1 col-start-1" />
          }
          <div className="w-full h-full border-box max-w-6xl px-10 md:px-32 mx-auto row-start-2 col-start-1">
            <div className="w-full h-full">
              <main>
                { children }
              </main>
            </div>
          </div>
        </div>
    </div>
  )
}
