import React from "react"
import { adminSidebarLinks } from "@/shared/data/profile"
import { ProfileLayout } from "@/shared/components/layouts"
import {
  AdminStatsBanner,
  CompanyHeader,
  IconHeader,
  LatestActivity,
} from "@/components/admin"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SecContainer } from "@/shared/components/containers"
import { ButtonColored } from "@/shared/components/buttons"
import { JobOpeningCard } from "@/shared/components/cards"
import { userService } from "@/services/index"
import { EditClientModal } from "@/components/admin/EditClient"

function details() {
  const router = useRouter()
  // const { detailID } = router.query
  const { clientID } = router.query

  const [company, setCompany] = useState({})
  const [openings, setOpenings] = useState([])
  const [openModal, setOpenModal] = useState(false)

  

  const getData = async () => {
    const data = await userService.getCompany(clientID)
    const openings = await userService.getCompanyOpening(clientID)
   
    setCompany(data.data)
    setOpenings(openings.data.job_openings)
  }

  const handleClickOpenings = () => {
    router.push(`/client/openings/${clientID}`)
  }

  useEffect(() => {
    getData()
    if (clientID) {
      localStorage.setItem("client", JSON.stringify(clientID))
    }
  }, [])
  return (
    <ProfileLayout title='Admin' sidebarLinks={adminSidebarLinks} admin={true}>
      {company && (<div className='flex flex-col gap-6'>
        <CompanyHeader
          banner={`${
            company?.cover_img ||
            process.env.deploymentPath +
              "/img/profile/default_profile_cover.jpg"
          }`}
          logo={`${
            company?.company_logo ||
            process.env.deploymentPath + "/img/profile/default_profile_img.png"
          }`}
          companyName={company?.company_name || ''}
          companyTag={company?.tagline || ''}
          id={clientID}
          setClient={setCompany}
          setOpenModal={setOpenModal}
        />

        <SecContainer className='p-6 flex flex-col gap-4 bg-white rounded-r-8 '>
          <h2 className='text-grey-2 text-t-20 font-medium '>About</h2>
          <p className='text-grey-3 text-t-12 leading-[15px] font-regular '>
            {company.bio}
          </p>
        </SecContainer>

        <SecContainer>
          <div className='flex items-center justify-between'>
            <h2 className=' font-medium text-t-20 text-grey-2 '>
              Job Openings
            </h2>
            <ButtonColored
              label='See all Openings'
              bg='bg-peach-2'
              color='text-sec-peach'
              handleClick={() => handleClickOpenings()}
            />
          </div>

          <div className=' mt-10 max-w-[1000px]  flex  gap-6 overflow-x-scroll  '>
            {openings && openings.map((opening, index) => (
              <JobOpeningCard
                key={index}
                title={opening.job_title}
                jobType={opening.employment_type.employment_type}
                jobDesc={opening.description}
                jobLocation={opening.work_place_type.workplace_type}
                timePosted={opening.date_created}
                id={opening.job_opening_id}
                clientId={clientID}
                
              />
            ))}
          </div>
        </SecContainer>
      </div>)}
      {openModal && (
        <EditClientModal
          data={company}
          setOpenModal={setOpenModal}
          id={clientID}
        />
      )}
    </ProfileLayout>
  )
}

export default details
