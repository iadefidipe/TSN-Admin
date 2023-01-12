import { JobOpeningSinglePage } from "@/components/profile/company"
import { ProfileLayout } from "@/shared/components/layouts"
import React from "react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useState } from "react"
import { userService } from "@/services/index"
import { useAppSelector } from "src/store"
import { adminSidebarLinks } from "@/shared/data/profile"


const index = () => {
  const router = useRouter()
 
  const { openingID } = router.query
  
  // const clientID = useAppSelector((state) => state.clientID)
  // console.log("clientId", clientID)
  const [data, setData] = useState()

  const getData = async () => {
    const client =
      typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("client"))
    
    const data = await userService.getOpeningDetails(client, openingID)
    setData(data.data.job_opening)
  }
 
  useEffect(() => {
    getData()
  }, [])

  return (
    <ProfileLayout title='Admin' sidebarLinks={adminSidebarLinks} admin={true}>
      <section className='min-w-full min-h-full rounded-lg'>
        <JobOpeningSinglePage
          title={data?.job_title}
          type={data?.employment_type.employment_type}
          location={data?.work_place_type.workplace_type}
          jobTags={data?.skills}
          about={data?.description}
        />
      </section>
    </ProfileLayout>
  )
}

export default index
