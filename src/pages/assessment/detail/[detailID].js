import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { userService } from "@/services/index"
import { adminSidebarLinks } from "@/shared/data/profile"
import { ProfileLayout } from "@/shared/components/layouts"
import { SecContainer } from "@/shared/components/containers"
import Image from "next/image"


function DetailsId() {
  const router = useRouter()
  const { assessmentID } = router.query

  const [assessment, setAssessment] = useState({})
  const getData = async () => {
    const data = await userService.getAssessmentDetail(assessmentID)
    setAssessment(data.data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <ProfileLayout title='Admin' sidebarLinks={adminSidebarLinks} admin={true}>
      <SecContainer>
        <div className="flex flex-col gap-11" >
          <div className='flex items-center gap-6 '>
            <Image
              src={`${process.env.deploymentPath}/img/admin/javascript.png`}
              alt=''
              width={180}
              height={180}
            />
            <div className=' flex flex-col justify-start items-start  '>
              <h2 className='text-t-36 font-semi-mid '>
                {assessment?.assessment_name}
              </h2>
              <div className='bg-[#FFECEA] rounded-r-12  flex items-center gap-2 px-3 py-2 '>
                <Image
                  src={`${process.env.deploymentPath}/icons/global/profile-2user.svg`}
                  alt=''
                  width={16}
                  height={16}
                />
                <span className='text-t-12 text-[#FF5B49] '>
                  {assessment.total_completed} Take this{" "}
                </span>
              </div>
            </div>
          </div>

          <div className=' text-t-20 text-grey-3  flex flex-col gap-[34px] '>
            <div>{assessment.description}</div>

            <div className="flex flex-col gap-2" >
              {/* <div className=' flex items-center gap-[10px] '>
                <Image
                  src={`/icons/global/note-text.svg`}
                  alt=''
                  width={24}
                  height={24}
                />
                <span>{duration} minutes per question</span>
              </div>
              <div className=' flex items-center gap-[10px] '>
                <Image
                  src={`/icons/global/medal.svg`}
                  alt=''
                  width={24}
                  height={24}
                />
                <span>{duration} minutes per question</span>
              </div> */}
              <div className=' flex items-center gap-[10px] '>
                <Image
                  src={`${process.env.deploymentPath}/icons/global/timer.svg`}
                  alt=''
                  width={24}
                  height={24}
                />
                <span>{assessment.duration} minutes per question</span>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-3 " >
            <div  className="flex flex-col gap-4 ">
              <h3 className="text-t-24 font-medium " >Instructions</h3>
              <div className=' text-t-20 text-grey-3  flex flex-col gap-2 '>
                <div className=' flex items-center gap-[10px] '>
                  <Image
                    src={`${process.env.deploymentPath}/icons/global/tick-square.svg`}
                    alt=''
                    width={24}
                    height={24}
                  />
                  <span>
                    You must complete this assessment in one session — make sure
                    your internet is reliable.
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </SecContainer>
    </ProfileLayout>
  )
}

export default DetailsId
