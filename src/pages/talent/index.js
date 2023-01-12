import { JobMatchCard } from "@/shared/components/cards"
import { MainContainer } from "@/shared/components/containers"
import { ProfileLayout } from "@/shared/components/layouts"
import { clientSidebarLinks } from "@/shared/data/profile"
import React from "react"

function index() {
  return (
    <ProfileLayout title='client' sidebarLinks={clientSidebarLinks}>
      <MainContainer bg='bg-white' px='px-10' py='py-[43px]'>
        <div className='flex flex-col gap-[30px] '>
          <h2 className='text-grey-2 text-t-40 font-bold '>Talent Matches</h2>
          <div>
            <JobMatchCard />
          </div>
        </div>
      </MainContainer>
    </ProfileLayout>
  )
}

export default index
