import Image from "next/image"
import { NavbarInput, NavbarProfileOptions } from "./"
import Link from "next/link"
import { useRouter } from "next/router"

export const Navbar = () => {
  const router = useRouter()

  return (
    <header className='lg:h-[100px] lg:sticky lg:top-0 bg-white z-10'>
      <nav className='relative flex flex-col lg:flex-row justify-between lg:gap-[90px] xl:gap-[180px] h-full items-center lg:mr-[calc((100vw_-_95%)_/_2)] '>
        {!(router.pathname === "/") && (
          <button
            onClick={() => router.back()}
            className=' ml-[300px] flex items-center gap-3'
          >
            <Image
              src={`${process.env.deploymentPath}/icons/global/arrow-left.svg`}
              width={15}
              height={15}
            />
            <span>Go back</span>
          </button>
        )}
        {/* <NavbarInput /> */}
        <div className={ `  ${ router.pathname === "/" && "w-[100%] " }  `} >
          <NavbarProfileOptions />
        </div>
      </nav>
    </header>
  )
}
