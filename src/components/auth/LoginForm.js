import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import {
  IconCheckboxFalse,
  IconCheckboxTrue,
  IconEnvelope,
  IconEye,
  IconLock,
} from "@/shared/components/icons"
import { InputField } from "@/shared/components"
import { SubmitButton } from "./SubmitButton"
import Link from "next/link"
import { userService } from "@/services/user.service"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { setUser } from "src/store/user"

export const LoginForm = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [isRememberChecked, setIsRememberChecked] = useState(false)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [reveal, setReveal] = useState(false)

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    }

    userService
      .login(data)
      .then((response) => {
        const returnUrl = router.query.returnUrl || "/"
        router.push(returnUrl)
      })
      .catch((error) => {
        console.error(`Something went wrong: ${error}`)
      })
  }

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/")
    }
  }, [])

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputField
        inputPlaceholder='Email Address'
        inputType='email'
        childrenHandleClick={() => null}
        inputIcon={<IconEnvelope />}
        inputOnChange={(e) => setEmail(e.target.value)}
        inputValue={email}
      />

      <InputField
        extraClass='mt-6'
        inputPlaceholder='Password'
        inputType={!reveal ? "password" : "text"}
        childrenHandleClick={() => setReveal(!reveal)}
        inputIcon={<IconLock />}
        inputOnChange={(e) => setPassword(e.target.value)}
        inputValue={password}
      >
        <IconEye />
      </InputField>

      <div className='flex items-center justify-between mt-5'>
        <div
          className='flex items-center'
          onClick={() => setIsRememberChecked(!isRememberChecked)}
        >
          {isRememberChecked ? <IconCheckboxTrue /> : <IconCheckboxFalse />}

          <span className='ml-2 text-sm cursor-default remember_checkbox-text'>
            Remember me
          </span>
        </div>

        {/* <Link href='/auth/forgot-password'>
          <a  className='transition-opacity duration-300 login_form_forgot-text karla-b hover:opacity-75'>
            Forgot Password?
          </a>
        </Link>  */}
      </div>

      <SubmitButton
        btnText='Log In'
        handleClick={() => handleLogin()}
        linkHref='/auth/register'
        pText=''
      />
    </form>
  )
}
