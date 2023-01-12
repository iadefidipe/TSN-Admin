import { useState, useEffect } from "react"
import { adminSidebarLinks } from "@/shared/data/profile"
import { ProfileLayout } from "@/shared/components/layouts"
import {
  AdminStatsBanner,
  AssessmentCard,
  IconHeader,
  LatestActivity,
} from "@/components/admin"
import { ButtonIcon } from "@/shared/components"
import {
  IconNoteText,
  IconStickyNote,
  IconTimer,
} from "@/shared/components/icons"
import Image from "next/image"
import { userService } from "@/services/index"
import { useRouter } from "next/router"
import Link from "next/link"

function index() {
  const router = useRouter()

  const [data, setData] = useState([])

  const getData = async () => {
    const data = await userService.getAssessments()
    setData(data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleClickCreate = () => {
    router.push("/assessment/create")
  }

  const handleClickDetail = (id) => {
    router.push({
      pathname: "/assessment/detail/[id]",
      query: { assessmentID: id },
    })
  }

  return (
    <ProfileLayout title='Admin' sidebarLinks={adminSidebarLinks} admin={true}>
      <div className='flex items-center justify-between'>
        <IconHeader iconName='profile-2user' label='Assessment' nav />
        <ButtonIcon
          iconName='add-square'
          label='Create Assessment'
          textClr='text-white'
          btnBg='bg-blue'
          handleClick={handleClickCreate}
        />
      </div>

      <section className='mt-10 flex flex-wrap gap-y-6 gap-x-8 '>
        {data?.map((item, index) => (
          <AssessmentCard
            key={index}
            name={item.assessment_name}
            duration={item.duration}
            image={item.assessment_banner_img}
            handleClick={() => handleClickDetail(item.assessment_id)}
          />
        ))}
      </section>
    </ProfileLayout>
  )
}

export default index
