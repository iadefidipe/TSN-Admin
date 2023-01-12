import { handleClickOutside } from "@/utils/helper"
import { InputField, InputWrap, Loading } from "@/shared/components"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { userService } from "@/services/index"
import { useRouter } from "next/router"
import { toast } from "react-toastify"


export const EditCandidateModal = ({
  data,
  setOpenModal,

  id,
}) => {
  const router = useRouter()
  const activeEl = useRef(null)
  const modalEl = useRef(null)

  const [loading, setLoading] = useState(false)

  const [name, setName] = useState(data?.fullname)
  const [email, setEmail] = useState(data?.email)
  const [isActive, setIsActive] = useState(data?.active)
  const [openStatus, setOpenStatus] = useState(false)

  const handleSubmit = async () => {

    const alert = toast.loading('Loading...')
    try {
      setLoading(true)
      if (isActive === 0) {
        await userService.deactivateCandidate(id)
        setOpenModal(false)
        router.push("/candidates")
      } else {
        await userService.activateCandidate(id)
        setOpenModal(false)
        router.push("/candidates")
      }

      toast.update(alert, {
        render: "Done!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)

     
      toast.update(alert, {
        render: `Something went wrong ${error}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      })
    }
  }

  //   const getData = async () => {
  //     const data = await userService.getCandidate(candidateID)
  //     setUserData(data.data)
  
  //   }

  useEffect(() => {
    handleClickOutside(activeEl, setOpenStatus)
    handleClickOutside(modalEl, setOpenModal)
  }, [])
  return (
    <div className=' bg-overlay-modal absolute top-0 left-0 right-0 bottom-[-500px] flex items-center justify-center   '>
      {loading && <Loading />}
      <div
        ref={modalEl}
        className='bg-white   w-[500px] p-5 flex flex-col gap-3 rounded-[12px] '
      >
        <h3 className='text-t-20 font-medium'>Edit Candidate</h3>

        <InputWrap title='Candidate Name'>
          <InputField
            inputPlaceholder='Candidate Name'
            inputType='text'
            inputValue={name}
            inputOnChange={(e) => setName(e.target.value)}
          />
        </InputWrap>
        <InputWrap title='Candidate email'>
          <InputField
            inputPlaceholder='Candidate email'
            inputType='email'
            inputValue={email}
            inputOnChange={(e) => setEmail(e.target.value)}
          />
        </InputWrap>
        <div className='relative'>
          <InputWrap title='Status'>
            <InputField
              inputPlaceholder='Status '
              inputType='text'
              inputValue={isActive === 1 ? "Active" : "Deactivated"}
              inputOnChange={() => {}}
              inputIcon={
                <Image
                  src={`${process.env.deploymentPath}/icons/profile/arrow-up.svg`}
                  alt=''
                  width={20}
                  height={20}
                />
              }
              right
              iconFunc={() => setOpenStatus(!openStatus)}
            />
          </InputWrap>
          {openStatus && (
            <div
              ref={activeEl}
              className='bg-[#f4f4f4] cursor-pointer w-full mt-1 z-50 rounded-r-8 absolute '
            >
              <div
                className=' p-2 cursor-pointer hover:bg-[#faf8f8] '
                onClick={() => setIsActive(1)}
              >
                Activate
              </div>
              <div
                className=' p-2 cursor-pointer hover:bg-[#faf8f8] '
                onClick={() => setIsActive(0)}
              >
                Deactivate
              </div>
            </div>
          )}
        </div>
        <button
          className={` bg-blue flex items-center justify-center p-[14px] gap-[10px] rounded-r-8 `}
          onClick={() => handleSubmit()}
        >
          <p className='text-white text-center '>Submit</p>{" "}
        </button>
      </div>
    </div>
  )
}
