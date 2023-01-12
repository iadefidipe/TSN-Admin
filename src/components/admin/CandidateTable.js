import { handleClickOutside } from "@/utils/helper"
import { useState, useEffect, useRef } from "react"
import { InputField, InputWrap, Loading } from "@/shared/components"
import { userService } from "@/services/index"
import Image from "next/image"
import { toast } from "react-toastify"

function CandidateTable({
  setOpenModal,
  data,
  client,
  positionID,
  setRequests,
}) {
  const [status, setStatus] = useState([{'status': ''}])
  const [openDrop, setOpenDrop] = useState(false)
  const [name, setName] = useState(data.candidate)
  const [position, setPosition] = useState(data.position)
  const [match, setMatch] = useState(data.status)
  const [matchID, setMatchID] = useState()
  const getData = async () => {
    const status = await userService.getAssessmentStatus()
    
    setStatus(status.data)
  }

  const [loading, setLoading] = useState(false)

  const modalEl = useRef(null)
  const activeEl = useRef(null)

  const handleSubmit = async () => {
    const alert = toast.loading("Loading...")
    if (!matchID) return
    const data = {
        assessment_status_id: matchID,
    }
    try {
      setLoading(true)
      await userService.updateCandidateAssessment(client, positionID, data)
      // if (request) {
      //   const data = await userService.getTalentRequest()
      //   setRequests(
      //     data.data.map((item) => {
      //       return {
      //         position: item.job_opening.job_title,
      //         client: item.client_profile.company_name,
      //         candidate: item.candidate_profile.fullname,
      //         date_created: moment(item.date_created).format("DD/MM/YY"),
      //         status: item.position_match_status.position_match_status,
      //         candidate_email: item.candidate_profile.email,
      //         client_email: item.client_profile.email,
      //         candidate_id: item.candidate_profile_id,
      //         client_id: item.client_profile_id,
      //         position_id: item.position_match_id,
      //       }
      //     })
      //   )
      // }

      toast.update(alert, {
        render: "Done!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      })
      setLoading(false)
      setOpenModal(false)
    } catch (error) {
      setLoading(false)

      console.error(`Someting went wrong: ${error}`)
      toast.update(alert, {
        render: `Something went wrong ${error}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      })
    }
  }

  useEffect(() => {
    getData()
    handleClickOutside(modalEl, setOpenModal)
    handleClickOutside(activeEl, setOpenDrop)
  }, [])

  return (
    <>
      {loading && <Loading />}
      <div className=' bg-overlay-modal absolute top-0 left-0 right-0 bottom-[-500px] flex items-center justify-center   '>
        <div
          ref={modalEl}
          className='bg-white   w-[500px] p-5 flex flex-col gap-3 rounded-[12px] '
        >
          <h3 className='text-t-20 font-medium'>Edit Canidate Assessment Status</h3>

          {/* <InputWrap title='Candidate Name'>
            <InputField
              inputPlaceholder='Candidate Name'
              inputType='text'
              inputValue={name}
              // inputOnChange={(e) => setName(e.target.value)}
            />
          </InputWrap>
          <InputWrap title='Position'>
            <InputField
              inputPlaceholder='Position'
              inputType='text'
              inputValue={position}
              // inputOnChange={(e) => setPosition(e.target.value)}
            />
          </InputWrap> */}

          <div className='relative'>
            <InputWrap title='Status'>
              <InputField
                inputPlaceholder='Status '
                inputType='text'
                inputValue={match}
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
                iconFunc={() => setOpenDrop(!openDrop)}
              />
            </InputWrap>
            {openDrop && (
              <div
                ref={activeEl}
                className='bg-[#f4f4f4] cursor-pointer w-full mt-1 z-50 rounded-r-8 absolute '
              >
                {status.map((item, index) => (
                  <div
                    key={index}
                    className=' p-2 cursor-pointer hover:bg-[#faf8f8] '
                    onClick={() => {
                      setMatch(item.assessment_status)
                      setMatchID(item.assessment_status_id
                        )
                    }}
                  >
                    {item.assessment_status}
                  </div>
                ))}
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
    </>
  )
}

export default CandidateTable
