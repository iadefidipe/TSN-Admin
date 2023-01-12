import { Provider } from "react-redux"
import "../styles/globals.css"
import NextNProgress from "nextjs-progressbar"
import { store } from "../store/store"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { userService } from "../services"
import { ProfileLayout } from "@/shared/components/layouts"
import { adminSidebarLinks } from "@/shared/data/profile"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function MyApp({ Component, pageProps }) {
  // const store = getStore(pageProps.initialState)

  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    // run auth check on initial load
    authCheck(router.asPath)

    // set authorized to false to hide page content while changing routes
    const hideContent = () => setAuthorized(false)
    router.events.on("routeChangeStart", hideContent)

    // run auth check on route change
    router.events.on("routeChangeComplete", authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent)
      router.events.off("routeChangeComplete", authCheck)
    }
  }, [])

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = [
      "/auth/login",
      "/auth/forgot-password",
      "/auth/register",
    ]
    const path = url

    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false)
      router.push({
        pathname: "/auth/login",
      })
    } else {
      setAuthorized(true)
    }
  }
  return (
    <>
      {authorized && (
        <Provider store={store}>
          {/* <NextNProgress
            color='linear-gradient(90deg, rgba(24, 114, 242, 1) 0%, rgba(44, 127, 241,1) 40%, rgba(87, 152, 241,1) 100%)'
            height={3}
          /> */}

          <ToastContainer
            theme='light'
            position='top-right'
            autoClose={3000}
            hideProgressBar={true}
          />

          <Component {...pageProps} />
        </Provider>
      )}
    </>
  )
}

export default MyApp
