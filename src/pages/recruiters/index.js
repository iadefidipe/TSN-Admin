import { useEffect, useState } from "react"
import { adminSidebarLinks } from "@/shared/data/profile"
import { ProfileLayout } from "@/shared/components/layouts"
import { AdminStatsBanner, IconHeader } from "@/components/admin"
import { userService } from "@/services/index"
import tw from "tailwind-styled-components"
import { useTable } from "react-table"
import { useMemo } from "react"
import { SecContainer } from "@/shared/components/containers"
import {  ButtonIcon } from "@/shared/components"
import { ButtonColored } from "@/shared/components/buttons"
import Image from "next/image"

const Table = tw.table`
table-fixed
 w-[100%]

`

const TableHead = tw.thead`
  
`

const TableRow = tw.tr`
text-left



`

const TableHeader = tw.th` text-t-16 font-regular text-grey-2 `

const TableBody = tw.tbody`text-left
`

const TableData = tw.td`
text-t-14 font-regular text-grey-2 text-left

p-5

`

function index() {
  const [clients, setClients] = useState([])
  const [stats, setStats] = useState({ active: 0, inActive: 0, total: 0 })

  // data injection
  const getData = async () => {
    const data = await userService.getRecruitersProfile()
    setClients(data.data.recruiter_profiles)
   
    setStats({
      active: data.data.total_active,
      inActive: data.data.total_inactive,
      total: data.data.total,
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const data = useMemo(() => [...clients], [clients])

  const columns = useMemo(
    () => [
      {
        id: "IMG",
        Header: "Image",
        accessor: "profile_img",
      },

      {
        Header: "Full Name",
        accessor: "fullname",
        Cell: ({ row }) => {
          return (
            <div className='flex items-center gap-3'>
              {row.values.IMG !== null && (
                <Image
                  src={row.values.IMG}
                  alt={row?.values?.fullname}
                  className='rounded-full'
                  width={32}
                  height={32}
                />
              )}
              <p>{row?.values?.fullname}</p>
            </div>
          )
        },
      },

      // {
      //   Header: "Location",
      //   accessor: "location",
      // },
      {
        Header: "Interest",
        accessor: "recruiter_profile_status_id",
        Cell: ({ row }) => {
          return (
            <div
              className={` py-1 px-[6px] rounded-[2px] text-center  ${
                row.values.recruiter_profile_status_id === 1 &&
                "text-[#750101] bg-[#ff49491a]"
              } ${
                row.values.recruiter_profile_status_id === 2 &&
                "text-[#1872F2] bg-[#1872f21a]"
              } ${
                row.values.recruiter_profile_status_id === 3 &&
                "text-[#017D51] bg-[#49ffbd1a]"
              } ${
                row.values.recruiter_profile_status_id > 3 &&
                "text-[#BBAA15] bg-[#bbaa151a]"
              } `}
            >
              {row.values.recruiter_profile_status_id === 1
                ? "Frontend"
                : row.values.recruiter_profile_status_id === 2
                ? "Backend"
                : row.values.recruiter_profile_status_id === 3
                ? "Project managment"
                : row.values.recruiter_profile_status_id === 4
                ? "Scrum"
                : "Product Owner"}
            </div>
          )
        },
      },
      {
        Header: "Activity",
        accessor: "active",
        Cell: ({ row }) => {
          return (
            <div
              className={` py-1 px-[6px] rounded-[2px] text-center ${
                row.values.active === 0
                  ? "text-[#f218181a]  bg-[ #f21818] "
                  : "text-[#1872F2] bg-[#1872f21a] "
              } `}
            >
              {row.values.active === 0 ? "Inactive" : "Active"}
            </div>
          )
        },
      },
    ],
    []
  )

  const tableInstance = useTable({
    columns,
    data,
    initialState: {
      hiddenColumns: ["IMG"],
    },
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <ProfileLayout title='admin' sidebarLinks={adminSidebarLinks} admin={true}>
      <div className='flex items-center justify-between'>
        <IconHeader iconName='profile-2user' label='Recruiters' nav />
        {/* <ButtonIcon
          iconName='add-square'
          label='Create Assessment'
          textClr='text-white'
          btnBg='bg-blue'
        /> */}
      </div>
      <AdminStatsBanner
        total={stats.total}
        active={stats.active}
        inactive={stats.inActive}
        label='Recruiters'
      />
      <SecContainer>
        <div className='  flex justify-between items-center my-5 '>
          <h3 className=' font-medium text-grey-2 text-t-20  '>
            Recruiters List{" "}
          </h3>
          {/* <ButtonColored label='Filter' bg='bg-[#00C373]' color='text-white' /> */}
        </div>
        {/* <div>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableHeader className="recruit-table-head" {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </TableHeader>
                  ))}
                </TableRow>
              ))}
            </TableHead>

            <TableBody  {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row)

                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell, idx) => {
                      return (
                        <TableData className=" recruit-table-row"  {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </TableData>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div> */}
      </SecContainer>
    </ProfileLayout>
  )
}

export default index
