import { useAppSelector } from "src/store/hooks"

export const ResumeWelcomeText = () => {
  const {
    user: { first_name },
  } = useAppSelector((state) => state.user)

  return (
    <div className='text-center mb-5 lg:mb-10'>
      <h2 className='outfit-sb text-3xl lg:text-5xl leading-[60.48px] text-[#111] tracking-tighter mb-2'>
        Welcome, {first_name}😊
      </h2>
      <p className='max-w-[453px] text-xs lg:text-base mx-auto text-[#7D7D7D]'>
        We are super excited to be a part of your career journey. Get started by
        uploading your Resume and we will kick it off from there
      </p>
    </div>
  )
}
