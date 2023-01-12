import { AuthLayout } from "@/shared/components/layouts"

import { GoogleButton, LoginForm } from "@/components/auth"

const Login = () => {
  return (
    <AuthLayout
      title='Sign in'
      userTitleText='Welcome Back!'
      // userTextDesc='Connecting the talents to organizations without restrictions'
      userTextDesc = ''
      formTitleText='Log In'
      formTextDesc='Fill the details below to sign in'
    >
      {/* <GoogleButton buttonText='Log in' handleClick={() => null} /> */}

      {/* <p className='relative my-4 text-center auth_or xl:my-7'>OR</p> */}

      <LoginForm />
    </AuthLayout>
  )
}

export default Login
