import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import PropTypes from "prop-types"
import Image from "next/image"

export const ProfileLink = ({
  label,
  href,
  navPath,
  icon,
  
  iconActive,
  admin,
}) => {
  const { pathname, push } = useRouter()
  const [isActive, setIsActive] = useState(pathname.includes(navPath))
  const activeStyles = isActive
    ? "outfit-sb cursor-default nav_link-active"
    : "opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"

  const handleClick = (event) => {
    event.preventDefault()
    setIsActive(true)
    push(href)
  }

  useEffect(() => {
    setIsActive(pathname.includes(navPath))
  }, [pathname])

  if (isActive) {
    return (
      <a
        className={`${activeStyles} flex items-center bg-white  rounded-lg text-sm  gap-1 ${
          admin ? " pt-4 pb-5 pl-6 w-[200px] max-h-[60px] " : "flex-col justify-center leading-7 w-full h-full  "
        }  `}
      >
        <div className='w-6 h-6'>
          <Image
            src={`${process.env.deploymentPath}/icons/profile/${iconActive}.svg`}
            alt={label}
            width={24}
            height={24}
          />
        </div>
        <span>{label}</span>
      </a>
    )
  } else {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`${activeStyles} flex  ${admin ? ' pt-4 pb-5 pl-6 w-[200px] max-h-[60px] ' : 'flex-col w-full h-full justify-center'} items-center text-white  text-sm leading-7 gap-1`}
      >
        <div className='w-6 h-6'>
          <Image
            src={`${process.env.deploymentPath}/icons/profile/${icon}.svg`}
            alt={label}
            width={24}
            height={24}
          />
        </div>
        <span>{label}</span>
      </a>
    )
  }
}

ProfileLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  navPath: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconActive: PropTypes.string.isRequired,
  admin: PropTypes.bool,
}
