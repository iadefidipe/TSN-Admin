import { InputField } from "@/shared/components"
import { IconEnvelope } from "@/shared/components/icons"
import { SubmitButton } from "./SubmitButton"
import { useState } from "react"
import { userService } from "@/services/index"

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState()

  const handleSubmit = async () => {
    if (email === "") return
    const data = { email}
   
    try {
      await userService.forgotPassword(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputField
        extraClass='mt-28'
        inputPlaceholder='Email Address'
        inputType='email'
        childrenHandleClick={() => null}
        inputIcon={<IconEnvelope />}
        inputOnChange={(e) => setEmail(e.target.value)}
        inputValue={email}
      />

      <SubmitButton
        btnText='Forgot Password'
        handleClick={() => handleSubmit()}
        pText='Already have an account?'
        linkText='Sign In'
        linkHref='/auth/login'
      />
    </form>
  )
}
