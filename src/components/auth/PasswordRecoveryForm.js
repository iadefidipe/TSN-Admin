import { IconEye, IconLock } from "@/shared/components/icons"
import { InputField } from "@/shared/components"
import { SubmitButton } from "./SubmitButton"

export const PasswordRecoveryForm = () => {
  return (
    <form onSubmit={() => null}>
      <InputField
        inputPlaceholder='Create New Password'
        inputType='password'
        childrenHandleClick={() => null}
        inputIcon={<IconLock />}
        inputOnChange={() => null}
        inputValue=''
      >
        <IconEye />
      </InputField>

      <InputField
        extraClass='mt-6'
        inputPlaceholder='Confirm Password'
        inputType='password'
        childrenHandleClick={() => null}
        inputIcon={<IconLock />}
        inputOnChange={() => null}
        inputValue=''
      >
        <IconEye />
      </InputField>

      <SubmitButton
        btnText='Create Password'
        handleClick={() => null}
        pText='Already have an account?'
        linkText='Sign In'
        linkHref='/auth/login'
      />
    </form>
  )
}
