import React from "react"
import { adminSidebarLinks } from "@/shared/data/profile"
import { ProfileLayout } from "@/shared/components/layouts"
import {
  AdminStatsBanner,
  AssessmentCard,
  IconHeader,
  LatestActivity,
} from "@/components/admin"
import { ButtonIcon, InputField, InputWrap } from "@/shared/components"
import {
  IconNoteText,
  IconStickyNote,
  IconTimer,
} from "@/shared/components/icons"
import Image from "next/image"
import { MainContainer } from "@/shared/components/containers"
import { ButtonColored } from "@/shared/components/buttons"
import { useState, useEffect, useRef } from "react"
import { userService } from "@/services/index"
import { useRouter } from "next/router"
import { handleClickOutside } from "@/utils/helper"

function create() {
  const router = useRouter()
  const [interest, setInterest] = useState(["front", "back"])
  const [jobInterest, setJobInterest] = useState([])
  const [openLevel, setOpenLevel] = useState(false)
  const [openJob, setOpenJob] = useState(false)

  // fields
  const [name, setName] = useState("")
  const [duration, setDuration] = useState("")
  const [description, setDescription] = useState("")
  const [level, setLevel] = useState({})
  const [job, setJob] = useState({})
  const [CCEmail, setCCEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")

  const getData = async () => {
    const data = await userService.getJobLevel()
    const job = await userService.getJobInterest()
    setInterest(data.data)
    setJobInterest(job.data)
  }
  const jobEl = useRef(null)
  const levelEl = useRef(null)

 
  useEffect(() => {
    getData()
    handleClickOutside(jobEl, setOpenJob)
    handleClickOutside(levelEl, setOpenLevel)
  }, [])

  const handleCancel = () => {
    router.push("/assessment")
  }

  const handleCreate = async () => {
    const data = {
      assessment_name: name,
      assessment_cc_email: CCEmail,
      assessment_email_body: body,
      assessment_email_subject: subject,
      job_level_id: job.interest_id,
      description,
      assessment_interest_id: level.job_level_id,
    }

    try {
      await userService.createAssessment(data)
      router.push("/assessment")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ProfileLayout title='Admin' sidebarLinks={adminSidebarLinks} admin={true}>
      <MainContainer bg='bg-white ' p>
        <section>
          <div className='flex justify-between items-center pt-10 ml-10 border-b-[1px] border-neutral-300 pb-6  '>
            <h2 className='text-t-20 font-medium text-grey-2 '>Basic Info</h2>
            <div
              className='flex gap-4 mr-3
            '
            >
              <ButtonColored
                label='Cancel'
                bg='bg-blue'
                color='text-blue'
                border='border-[1px] border-blue'
                px='px-6'
                py='py-2'
                handleClick={() => handleCancel()}
              />
              <ButtonColored
                label='Create Assesment'
                bg='bg-blue'
                color='text-white'
                px='px-6'
                py='py-2'
                handleClick={() => handleCreate()}
              />
            </div>
          </div>
          <div className='pt-10 px-6'>
            {/* <div className='flex items-center gap-6'>
              <div className='rounded-full p-[28px] bg-[#1872f219] w-[120px]  '>
                <Image
                  src='/icons/global/profile.svg'
                  alt=''
                  width={64}
                  height={64}
                />
              </div>
              <ButtonIcon
                label='Upload Thumbnail'
                iconName='edit'
                btnBg='bg-peach-2'
                textClr='text-sec-peach'
              />
            </div> */}

            <div className='mt-6 grid grid-cols-2 gap-6  '>
              <InputWrap title='Assessment Name'>
                <InputField
                  inputPlaceholder='Assessment name'
                  inputType='text'
                  inputValue={name}
                  inputOnChange={(e) => setName(e.target.value)}
                />
              </InputWrap>

              <div className='relative'>
                <InputWrap title='Asssement Level'>
                  <InputField
                    inputPlaceholder='Asssement Level '
                    inputType='text'
                    inputValue={level.job_level}
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
                    iconFunc={() => setOpenLevel(!openLevel)}
                  />
                </InputWrap>
                {openLevel && (
                  <div
                    ref={levelEl}
                    className='bg-[#f4f4f4] cursor-pointer w-full mt-1 z-50 rounded-r-8 absolute '
                  >
                    {interest.map((item, index) => (
                      <div
                        className=' p-2 cursor-pointer hover:bg-[#faf8f8] '
                        key={index}
                        onClick={(e) => setLevel(item)}
                      >
                        {item.job_level}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className='relative'>
                <InputWrap title='Job Interest'>
                  <InputField
                    inputPlaceholder='Job Interest'
                    inputType='text'
                    inputValue={job.interest_name}
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
                    iconFunc={() => setOpenJob(!openJob)}
                  />
                </InputWrap>
                {openJob && (
                  <div
                    ref={jobEl}
                    className='bg-[#f4f4f4]  w-full mt-1 z-50 rounded-r-8 absolute '
                  >
                    {jobInterest?.map((item, index) => (
                      <div
                        className=' cursor-pointer p-2 hover:bg-[#f2f2f2] '
                        key={index}
                        onClick={() => setJob(item)}
                      >
                        {item.interest_name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <InputWrap title='Duration'>
                <InputField
                  inputPlaceholder='1.5 minutes'
                  inputType='text'
                  inputValue={duration}
                  inputOnChange={(e) => setDuration(e.target.value)}
                />
              </InputWrap>
            </div>
          </div>

          <div>
            <div className='flex justify-between items-center pt-10 ml-10 border-b-[1px] border-neutral-300 '>
              <h2 className='text-t-20 font-medium text-grey-2 '>
                Description
              </h2>
            </div>
            <div className=' flex flex-col gap-6 pb-6 mx-6'>
              <div className=' '>
                <InputWrap title='instruction'>
                  <div className='relative w-full rounded-lg bg-[#f4f4f4]   h-[124px] '>
                    <textarea
                      className='w-full h-full text-sm bg-transparent rounded-lg outline-1 outline-blue-300 outfit-l input_field-input resize-none  px-6 pt-[17px] '
                      name=''
                      id=''
                      placeholder='Add description note'
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    ></textarea>
                  </div>
                </InputWrap>
                <div></div>
              </div>
              {/* <div className='flex justify-end'>
                <ButtonIcon
                  label='Add Instruction'
                  iconName='add-square-red'
                  btnBg='bg-peach-2'
                  textClr='text-sec-peach'
                />
              </div> */}
            </div>
          </div>
          <div>
            <div className='flex justify-between items-center pt-10 ml-10 border-b-[1px] border-neutral-300 pb-6'>
              <h2 className='text-t-20 font-medium text-grey-2 '>Assessment</h2>
            </div>
            <div className=' flex flex-col gap-6 pb-6 mx-6  '>
              <div className=' flex flex-col gap-6  '>
                <InputWrap title='Assessment cc email'>
                  <InputField
                    inputPlaceholder='email'
                    inputType='email'
                    inputValue={CCEmail}
                    inputOnChange={(e) => setCCEmail(e.target.value)}
                  />
                </InputWrap>
                <InputWrap title='Assessment Subject'>
                  <InputField
                    inputPlaceholder='Type Answer '
                    inputType='text'
                    inputValue={subject}
                    inputOnChange={(e) => setSubject(e.target.value)}
                  />
                </InputWrap>
                {/* <InputWrap title='Assement Body'>
                  <InputField
                    inputPlaceholder='Type Answer '
                    inputType='text'
                    inputValue={title}
                    inputOnChange={setTitle}
                  />
                </InputWrap> */}
                <InputWrap title='Assessment Body'>
                  <div className='relative w-full rounded-lg bg-[#f4f4f4]   h-[124px] '>
                    <textarea
                      className='w-full h-full text-sm bg-transparent rounded-lg outline-1 outline-blue-300 outfit-l input_field-input resize-none  px-6 pt-[17px] '
                      name=''
                      id=''
                      placeholder='Body'
                      onChange={(e) => setBody(e.target.value)}
                      value={body}
                    ></textarea>
                  </div>
                </InputWrap>
                {/* <InputWrap title='incorrect answer'>
                  <InputField
                    inputPlaceholder='Type Answer '
                    inputType='text'
                    inputValue={title}
                    inputOnChange={setTitle}
                  />
                </InputWrap> */}
              </div>

              {/* <div className='flex justify-end'>
                <ButtonIcon
                  label='Add Instruction'
                  iconName='add-square-red'
                  btnBg='bg-peach-2'
                  textClr='text-sec-peach'
                />
              </div> */}
            </div>
          </div>
        </section>
      </MainContainer>
    </ProfileLayout>
  )
}

export default create
