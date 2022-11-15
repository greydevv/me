import Navbar from 'components/Navbar'
import Head from 'next/head'

export default function Default({ noNavbar, children }) {
  return (
    <div className="w-full bg-light">
        <Head>
          <title>Greyson Murray</title>
          {/* <link rel="icon" href="favicon.ico" /> */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="196x196" href="/favicon-192.png" />
          <link rel="icon" type="image/png" sizes="160x160" href="/favicon-160.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
          <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
          <link rel="apple-touch-icon" href="/favicon-57.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="/favicon-144.png" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
        </Head>
        <div className="grid grid-rows-[auto_1fr] gap-y-6 sm:gap-y-10 md:gap-y-20 w-full h-screen overflow-y-scroll">
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

// Coming from director of sponsorship, I understand the importance of gathering
// corporate sponsors for the event. Our money comes from sponsors, and the number
// participants we have is directly influenced by the notoriety of said sponsors.
