import { EditCandidateModal, ProfileTabsContent } from "@/components/admin"
import { Header } from "@/components/profile"
import { userService } from "@/services/index"
import { ProfileLayout } from "@/shared/components/layouts"
// import { candidate } from "@/shared/data/profile"
import { adminSidebarLinks } from "@/shared/data/profile"
import { handleClickOutside } from "@/utils/helper"
import { useRouter } from "next/router"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useAppDispatch, useAppSelector } from "src/store"
import { setCurrentCanditate } from "src/store/Candidate"
import { toast } from "react-toastify"
import { Loading } from "@/shared/components"

const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [candidate, setCandidate] = useState({})
  // const candidate = useAppSelector(state => state.currentCandidate.candidate)
  const router = useRouter()
  const { candidateID } = router.query

  const profile = {
    title: "profile",
    about: candidate.bio,
    skills: candidate.skill,
    education: candidate.candidate_education,
    experience: candidate.candidate_experience,
    experienceAmount: "4 years",
  }
 
  const cover = {
    title: "Cover Letter",
    content: candidate.cover_letter,
  }
  const resume = {
    title: "CV/Resume",
    content: candidate.resume,
  }

  const getData = async () => {
    const alert = toast.loading("Loading...")

    try {
      setLoading(true)

      const data = await userService.getCandidate(candidateID)
      // dispatch(setCurrentCanditate(data.data))
      setCandidate(data.data)
      toast.update(alert, {
        render: "Done!",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.update(alert, {
        render: `Something went wrong ${error}`,
        type: "error",
        isLoading: false,
        autoClose: 1000,
      })
    }
  }

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  return (
    <ProfileLayout title='Admin' sidebarLinks={adminSidebarLinks} admin={true}>
      {loading && <Loading />}

      <section className='bg-white min-w-full min-h-full rounded-lg '>
        <Header
          {...candidate}
          admin
          setOpenModal={setOpenModal}
          id={candidateID}
          setCandidate={setCandidate}
        />
        <ProfileTabsContent profile={profile} resume={resume} cover={cover} />
      </section>

      {openModal && (
        <EditCandidateModal
          data={candidate}
          setOpenModal={setOpenModal}
          id={candidateID}
       
        />
      )}
    </ProfileLayout>
  )
}

export default ProfilePage
