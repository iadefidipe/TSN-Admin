import { Links } from "."
import { navLinks } from "../data"
import { BurgerIcon } from "."
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { hideSidebar, showSidebar } from "src/store/sidebar/sidebarSlice"

export const Sidebar = () => {
  const state = useAppSelector((state) => state)
  const {
    sidebar: { isOpen },
    user: { user },
  } = state
  const dispatch = useAppDispatch()
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`

  const handleIsOpen = () => {
    isOpen ? dispatch(hideSidebar()) : dispatch(showSidebar())
  }

  const handleCloseSidebar = ({ target }) => {
    if (!target.classList.contains("sidebar")) {
      dispatch(hideSidebar())
    }
  }

  return (
    <section
      className={`fixed z-30 w-screen h-screen lg:hidden transition-colors duration-300 ${
        isOpen ? "bg-slate-200/50 ml-0" : "sidebar__margin"
      }`}
      onClick={handleCloseSidebar}
    >
      <aside
        className={`sidebar relative flex flex-col w-72 sm:w-96 h-full py-8 bg-white shadow-lg gap-7 transition-all duration-300 lg:hidden ${
          isOpen ? "ml-0" : "-ml-96"
        }`}
      >
        <Links
          navItems={navLinks}
          classStyles='h-10 leading-10 px-8 transition duration-300 sidebar flex items-center gap-2 sidebar__link text-sm lg:text-xl'
        />
      </aside>

      <BurgerIcon
        handleIsOpen={handleIsOpen}
        isOpen={isOpen}
        genericHamburgerLine={genericHamburgerLine}
      />
    </section>
  )
}
