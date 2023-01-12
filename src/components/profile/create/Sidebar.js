import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { hideSidebar } from "src/store/sidebar"
import { ProfileLink } from "./"
import PropTypes from "prop-types"
export const Sidebar = ({ links, admin }) => {
  const dispatch = useAppDispatch()
  const { isOpen } = useAppSelector((state) => state.sidebar)

  const handleCloseSidebar = ({ target }) => {
    if (target.classList.contains("section_sidebar")) {
      dispatch(hideSidebar())
    }
  }

  return (
    <aside
      className={`section_sidebar fixed transition-all z-20 duration-300 ease-in-out left-0 top-0 h-screen w-screen lg:w-auto lg:ml-0 ${
        isOpen ? "ml-0 bg-slate-400/50" : "-ml-[100vw]"
      }`}
      onClick={handleCloseSidebar}
    >
      <section className={`z-10 bg-blue-p left-0 top-0 w-1/3 h-full ${admin ? 'max-w-[300px]  lg:max-w-none lg:w-[250px] ' : 'max-w-[200px]  lg:max-w-none lg:w-[150px]'}`}>
        <nav
          className={` pt-[132px] grid gap-5 ${
            
            admin
              ? " pl-[25px] pr-[35px] "
              : " grid-rows-[repeat(3,_100px)] grid-cols-[100px]  justify-center justify-items-center"
          }`}
        >
          {links?.map((link, index) => (
            <ProfileLink key={index} {...link} admin={admin} />
          ))}
        </nav>
      </section>
    </aside>
  )
}

Sidebar.propTypes = {
  links: PropTypes.array.isRequired,
  admin: PropTypes.bool,
}
