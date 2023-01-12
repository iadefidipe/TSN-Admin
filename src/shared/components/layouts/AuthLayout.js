import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import PropTypes from 'prop-types';

export const AuthLayout = ({ children, title, userTitleText, userTextDesc, formTitleText, formTextDesc }) => {
  return (
    <>
      <Head>
        <title>{`TSN | ${ title }`}</title>
        <meta name="description" content={`${ title }`} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="container grid grid-flow-col auto-cols-[minmax(320px,_1046px)] px-4 my-5 xl:my-16 main__container justify-center items-center min-h-screen">
        
        <div className="relative rounded-lg auth-container grid xl:grid-cols-[350px_696px]">
          <div className="absolute top-8 right-8">
            {/* <Link href={`${process.env.linksPath}/`}>
              <div className="transition-opacity duration-300 ease-in-out cursor-pointer hover:opacity-70">
                <Image
                  src={`${process.env.deploymentPath}/icons/auth/close_icon.svg`}
                  width={32}
                  height={32}
                  alt="Close Icon"
                />
              </div>
            </Link> */}
          </div>
          <section className="flex flex-col items-center justify-between gap-5 p-5 rounded-lg xl:items-start auth_info xl:rounded-r-none xl:px-10 xl:pb-16">
            
            <div className="order-1 xl:relative xl:-left-24 xl:-top-16 w-52 xl:w-64">
              <Image
                src={`${process.env.deploymentPath}/img/form_image.png`}
                width={300}
                height={278.93}
              />
            </div>

            <div className="w-5/6 mx-auto text-center user-text xl:order-2 xl:text-left xl:mx-0">
              <h3 className="mb-3 text-3xl xl:text-5xl karla-eb">{ userTitleText || '' }</h3>
              <p className="xl:text-lg">{ userTextDesc }</p>
            </div>

          </section>

          <section className="px-5 py-5 xl:py-0 xl:pt-12 xl:px-20">
            <div className="mb-6 text-center user-text xl:mb-11 xl:text-left">
              <h3 className="mb-3 text-3xl xl:text-5xl karla-eb">{ formTitleText || '' }</h3>
              <p className="xl:text-lg">{ formTextDesc }</p>
            </div>

            { children }

            <div>
              
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

