import { AuthLayout } from "@/shared/components/layouts"

import { ForgotPasswordForm } from "@/components/auth"

const ForgotPassword = () => {
  return (
    <AuthLayout
      title='Forgot Password'
      userTitleText='Don’t Loose Access'
      userTextDesc=''
      formTitleText='Forgot Password'
      formTextDesc='Enter your email address below to reset Password'
    >
      <ForgotPasswordForm />
    </AuthLayout>
  )
}

export default ForgotPassword
 