import { InputField } from "@/shared/components"
import {
  IconEnvelope,
  IconEye,
  IconLock,
  IconUser,
} from "@/shared/components/icons"
import Link from "next/link"

import { SubmitButton } from "./"

export const RegisterForm = () => {
  return (
    <form onSubmit={() => null}>
      <div className='grid xl:grid-cols-[repeat(2,_1fr)] gap-6'>
        <InputField
          inputPlaceholder='First Name'
          inputType='text'
          childrenHandleClick={() => null}
          inputIcon={<IconUser />}
          inputOnChange={() => null}
          inputValue=''
        />

        <InputField
          inputPlaceholder='Last Name'
          inputType='text'
          childrenHandleClick={() => null}
          inputIcon={<IconUser />}
          inputOnChange={() => null}
          inputValue=''
        />
      </div>

      <InputField
        extraClass='mt-6'
        inputPlaceholder='Email Address'
        inputType='email'
        childrenHandleClick={() => null}
        inputIcon={<IconEnvelope />}
        inputOnChange={() => null}
        inputValue=''
      />

      <InputField
        extraClass='mt-6'
        inputPlaceholder='Password'
        inputType='password'
        childrenHandleClick={() => null}
        inputIcon={<IconLock />}
        inputOnChange={() => null}
        inputValue=''
      >
        <IconEye />
      </InputField>

      <p className='mt-6 register_form-text'>
        By continuing past this page, you agree to the{" "}
        <Link href='/terms-of-use'>
          <a className='register_form-text-blue outfit-sb'>Terms of Use</a>
        </Link>{" "}
        and understand that information will be used as described in our Privacy
        Policy.
      </p>

      <SubmitButton
        btnText='Sign Up'
        handleClick={() => null}
        linkHref='/auth/login'
        linkText='Sign In'
        pText='Already have an account?'
      />
    </form>
  )
}
