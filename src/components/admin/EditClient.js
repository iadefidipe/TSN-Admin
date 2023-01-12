import { handleClickOutside } from "@/utils/helper"
import { InputField, InputWrap } from "@/shared/components"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { userService } from "@/services/index"
import { useRouter } from "next/router"

export const EditClientModal = ({ data, setOpenModal, id }) => {
  const router = useRouter()
  const activeEl = useRef(null)
  const modalEl = useRef(null)

  const [name, setName] = useState(data?.company_name)
  const [email, setEmail] = useState(data?.email)
  const [isActive, setIsActive] = useState(data?.active)
  const [openStatus, setOpenStatus] = useState(false)

  const handleSubmit = async () => {
    try {
      if (isActive === 0) {
        await userService.deactivateClient(id)
        setOpenModal(false)
        router.push("/client")
      } else {
        await userService.activateClient(id)
        setOpenModal(false)
        router.push("/client")
      }
    } catch (error) {
      console.error(`Someting went wrong: ${error}`)
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
      <div
        ref={modalEl}
        className='bg-white   w-[500px] p-5 flex flex-col gap-3 rounded-[12px] '
      >
        <h3 className='text-t-20 font-medium'>Edit Client</h3>

        <InputWrap title='Client Name'>
          <InputField
            inputPlaceholder='Client Name'
            inputType='text'
            inputValue={name}
            inputOnChange={(e) => setName(e.target.value)}
          />
        </InputWrap>
        <InputWrap title='Client email'>
          <InputField
            inputPlaceholder='Client email'
            inputType='email'
            inputValue={email}
            inputOnChange={(e) => setEmail(e.target.value)}
          />
        </InputWrap>
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
