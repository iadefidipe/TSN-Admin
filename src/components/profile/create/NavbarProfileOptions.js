import Image from "next/image"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { showSidebar } from "src/store/sidebar"
import { useMemo, useEffect, useState } from "react"
import { setUser } from "src/store/user"
import { userService } from "@/services/index"

export const NavbarProfileOptions = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)
  const [currentUser, setCurrentUser] = useState(null)
  const [open, setOpen] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState({})

  const getData = async (id) => {
    const data = await userService.getAdminProfile(id)
    
    setLoggedInUser(data.data)
  }

  const handleOpenSidebar = () => {
    dispatch(showSidebar())
  }
  useEffect(() => {
    const user =
      typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"))
    dispatch(setUser(user))

    getData(user.profile_id)

    const subscription = userService.user.subscribe((x) => setCurrentUser(x))
    return () => subscription.unsubscribe()
  }, [])
  function logout() {
    userService.logout()
    setOpen(false)
  }
  return (
    <div className='order-1 lg:order-2 w-full lg:w-auto relative'>
      <div
        className='w-6 h-6 absolute left-[calc(5%_/_2)] top-2/4 -translate-y-2/4 lg:hidden cursor-pointer'
        onClick={handleOpenSidebar}
      >
        <Image
          src={`${process.env.deploymentPath}/icons/profile/burger_icon.svg`}
          alt='Burger icon'
          width={24}
          height={24}
        />
      </div>

      <div className='w-[95%] mx-auto lg:mx-auto lg:w-auto flex gap-5 justify-end items-end h-16'>
        {/* <button className='bg-[#F4F4F4] rounded-lg w-[54px] h-[54px] flex justify-center items-center relative profile_notification-container transition-opacity duration-300 ease-in-out hover:opacity-70'>
          <Image
            src='/icons/profile/notification_icon.svg'
            alt='Notifications Icon'
            height={32}
            width={32}
          />
        </button> */}

        <div className='flex  gap-5'>
          {/* <Link href={`${process.env.linksPath}/open-for-offers`}>
            <a className='transition-opacity duration-300 ease-in-out hover:opacity-70 rounded-lg bg-[#FFECEA] h-[54px] grid items-center grid-flow-col gap-4 px-4'>
              <div className='flex gap-2 items-center'>
                <div className='rounded-lg bg-[#FF5B49] w-8 h-8 flex justify-center items-center'>
                  <Image
                    src='/icons/profile/open-for-offers_icon.svg'
                    alt='Open for Offers Icon'
                    height={16}
                    width={16}
                  />
                </div>
                <span className='text-[#6C757D] text-sm outfit-m hidden lg:inline-block'>
                  Open for Offers
                </span>
              </div>

              <div className='w-4 h-4'>
                <Image
                  src='/icons/profile/arrow-left_icon.svg'
                  alt='Arrow Icon'
                  height={16}
                  width={16}
                />
              </div>
            </a>
          </Link> */}

          <div className='relative '>
            <button
              className='transition-opacity duration-300 ease-in-out hover:opacity-70 rounded-lg bg-[#F4F4F4] h-[54px] grid items-center grid-flow-col gap-[11.64px] px-2 '
              onClick={() => setOpen(!open)}
            >
              <div className='flex gap-[6px] items-center'>
                <div className='w-10 h-10 flex justify-center items-center   '>
                  <Image
                    src={
                      loggedInUser.profile_img ||
                      `${process.env.deploymentPath}/icons/profile/default-user_icon.svg`
                    }
                    alt='User Image'
                    height={40}
                    width={40}
                  />
                </div>
                <span className='text-[#353535] outfit-m hidden lg:inline-block'>
                  {user?.first_name} {user?.last_name}
                </span>
              </div>
              <div className='flex justify-center items-center'>
                <Image
                  src={`${process.env.deploymentPath}/icons/profile/chevron-down_icon.svg`}
                  alt='Chevron Icon'
                  height={7.13}
                  width={12.73}
                />
              </div>
            </button>
            {open && (
              <div
                className='bg-[#F4F4F4] rounded-lg text-center p-3 absolute w-[100%] mt-1 '
                onClick={() => logout()}
              >
                Log Out
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
