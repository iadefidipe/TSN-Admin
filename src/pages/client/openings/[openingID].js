import { MainContainer } from "@/shared/components/containers"
import { ProfileLayout } from "@/shared/components/layouts"
import { adminSidebarLinks } from "@/shared/data/profile"
import React from "react"
import Image from "next/image"
import {
  ButtonIcon,
  JobDescTag,
  SectionHeaderButton,
  SectionTitle,
  TabComponent,
} from "@/shared/components"
import { useState } from "react"
import { JobOpeningCard } from "@/shared/components/cards"
import { userService } from "@/services/index"
import { useEffect } from "react"
import { useRouter } from "next/router"

function openings() {
  const router = useRouter()
  const { openingID } = router.query
  const tabs = [
    { title: "Active", id: 1 },
    { title: "Inactive", id: 2 },
  ]
  const [currentTab, setCurrentTab] = useState(tabs[0].title)
  const [activeOpenings, setActiveOpenings] = useState([])
  const [inActiveOpenings, setInActiveOpenings] = useState([])
 

  const getData = async () => {
    const openings = await userService.getCompanyOpening(openingID)

    setActiveOpenings(
      openings.data.job_openings.filter((id) => id.job_opening_status_id === 1)
    )
    setInActiveOpenings(
      openings.data.job_openings.filter((id) => id.job_opening_status_id === 2)
    )

   
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ProfileLayout title='Admin' sidebarLinks={adminSidebarLinks} admin={true}>
      <MainContainer px='px-6 ' py='py-10'>
        {/* <SectionHeaderButton
          title='Job openings'
          btnTitle='Add Job Opening'
          iconName='add-square'
          btnColor='bg-[#1872F2]'
          textColor='text-white'
          titleTxt='text-h2'
          weight='font-medium'
        /> */}

        <div className=' mt-[68px] mb-[40px] '>
          <TabComponent
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>

        <div className='flex  gap-4  flex-wrap'>
          {currentTab === "Active"
            ? activeOpenings.map((opening, index) => (
                <JobOpeningCard
                  key={index}
                  title={opening.job_title}
                  jobType={opening.employment_type?.employment_type || ''}
                  jobDesc={opening.description}
                  jobLocation={opening.work_place_type.workplace_type}
                  timePosted={opening.date_created}
                  id={opening.job_opening_id}
                />
              ))
            : inActiveOpenings.map((opening, index) => (
                <JobOpeningCard
                  key={index}
                  jobType={opening.employment_type?.employment_type || ''}
                  jobDesc={opening.description}
                  jobLocation={opening.work_place_type.workplace_type}
                  timePosted={opening.date_created}
                  id={opening.job_opening_id}
                />
              ))}
        </div>
      </MainContainer>
    </ProfileLayout>
  )
}

export default openings
