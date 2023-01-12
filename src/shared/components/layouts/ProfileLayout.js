import Head from "next/head"
import PropTypes from "prop-types"

import { Navbar, Sidebar } from "@/components/profile/create"

export const ProfileLayout = ({
  children,
  title,
  sidebarLinks,
  admin,

}) => {
  return (
    <>
        <>
          <Head>
            <title>{`TSN | ${title}`}</title>
            <meta name='description' content={`TSN ${title}`} />
            <meta name='msapplication-TileColor' content='#da532c' />
            <meta name='theme-color' content='#ffffff' />
          </Head>
          

          <Navbar />

          <main
            className={`overflow-hidden profile__main bg-[#FAFAFA] min-h-[calc(100vh_-_118px)] lg:min-h-[calc(100vh_-_100px)] ${
              admin
                ? "lg:max-w-[calc(100vw_-_250px)] lg:ml-[250px]"
                : "lg:max-w-[calc(100vw_-_150px)] lg:ml-[150px] "
            }  px-4 lg:px-8 py-4 lg:py-8`}
          >
            {children}
          </main>

          <Sidebar links={sidebarLinks} admin={admin} />
        </>
    
    </>
  )
}

