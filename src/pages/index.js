import { useEffect, useState } from "react"
import { adminSidebarLinks } from "@/shared/data/profile"
import { ProfileLayout } from "@/shared/components/layouts"
import {
  AcceptanceChart,
  ActivityChart,
  AdminStatsBanner,
  IconHeader,
  LatestActivity,
} from "@/components/admin"
import { userService } from "../services"
import { AdminStatTile } from "@/components/admin/AdminStatTile"
import { SecContainer } from "@/shared/components/containers"
import { Loading } from "@/shared/components"
import { toast } from "react-toastify"

function index() {
  const [statData, setStatData] = useState([
    { control: "total", label: "candidate", value: 0 },
    { control: "total", label: "clients", value: 0 },
    { control: "total", label: "recruiters", value: 0 },
  ])

  const [activity, setActivity] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    // const alert = toast.loading("Loading...")

    try {
      setLoading(true)
      const data = await userService.getDashboardProfile()
      const activity = await userService.getLatestActivity()

      setActivity(activity.data)

      setStatData([
        {
          control: "total",
          label: "candidate",
          value: data.data.total_candidates,
        },
        { control: "total", label: "clients", value: data.data.total_clients },
        {
          control: "total",
          label: "recruiters",
          value: data.data.total_recruiters,
        },
      ])
      // toast.update(alert, {
      //   render: "Done!",
      //   type: "success",
      //   isLoading: false,
      //   autoClose: 2000,
      // })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      // toast.update(alert, {
      //   render: `Something went wrong ${error}`,
      //   type: "error",
      //   isLoading: false,
      //   autoClose: 2000,
      // })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ProfileLayout
        title='Admin'
        sidebarLinks={adminSidebarLinks}
        admin={true}
      >
        {loading && <Loading />}
        <IconHeader iconName='profile-2user' label='Dashboard' />
        <div className=' flex  gap-5  justify-between mt-[43px] mb-6 '>
          {statData.map((item, index) => (
            <AdminStatTile
              key={index}
              control={item.control}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>

        <div className='flex gap-5 '>
          <div className='basis-[43.125rem] flex flex-col gap-6 '>
            <ActivityChart />
            <AcceptanceChart />
          </div>
          <div className='basis-[25.875rem]'>
            <LatestActivity data={activity} />
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default index

// const alert = toast.loading("Updating class...")
// toast.update(alert, {
//   render: "Class updated and sent for approval!",
//   type: "success",
//   isLoading: false,
//   autoClose: 3000,
// })
