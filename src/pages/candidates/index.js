import { useEffect, useState } from "react"
import { adminSidebarLinks } from "@/shared/data/profile"
import { ProfileLayout } from "@/shared/components/layouts"
import { AdminStatsBanner, IconHeader } from "@/components/admin"
import { userService } from "@/services/index"
import tw from "tailwind-styled-components"
import { useTable, useSortBy } from "react-table"
import { useMemo } from "react"
import Link from "next/link"
import { SecContainer } from "@/shared/components/containers"
import { ButtonColored } from "@/shared/components/buttons"
import Image from "next/image"
import { Loading, Pagination } from "@/shared/components"
import { useDispatch, useSelector } from "react-redux"
import { setAllCandidates } from "src/store/Candidate"
import { toast } from "react-toastify"

const Table = tw.table`
table-fixed
 w-[100%]

`

const TableHead = tw.thead`
  
`

const TableRow = tw.tr`
text-left



`

const TableHeader = tw.th`

text-t-16 font-regular text-grey-2 py-5

`

const TableBody = tw.tbody`


`

const TableData = tw.td`
text-t-14 font-regular text-grey-2

p-5
`

function index() {
  const dispatch = useDispatch()
  const candidates = useSelector((state) => state.allCandidates.candidates)
  const [loading, setLoading] = useState(false)

  const [stats, setStats] = useState({ active: 0, inActive: 0, total: 0 })
  const [pageInfo, setPageInfo] = useState({
    current_page: 1,
    last_page: 26,
    next_page: 2,
    previous_page: null,
    size: 10,
    total: 252,
    total_pages: 0,
  })

  const handlePageClick = async (event) => {
    try {
      if (event.selected === 0) {
        const data = await userService.getCandidates()
        setPageInfo(data.page)

        dispatch(
          setAllCandidates(
            data.data.candidate_profiles.map((client) => {
              return {
                profile_img: client.profile_img,
                active: client.active,
                candidate_status_id: client.candidate_status_id,
                fullname: client.fullname,
                location: client.location,
                primary_role: client.primary_interest?.interest_id,
                experience: client.primary_interest.years_of_experience,
                candidate_profile_id: client.candidate_profile_id,
              }
            })
          )
        )
      } else {
        const data = await userService.getCandidates(event.selected + 1)
        setPageInfo(data.page)
        dispatch(
          setAllCandidates(
            data.data.candidate_profiles.map((client) => {
              return {
                profile_img: client.profile_img,
                active: client.active,
                candidate_status_id: client.candidate_status_id,
                fullname: client.fullname,
                location: client.location,
                primary_role: client.primary_interest?.interest_id,
                experience: client.primary_interest.years_of_experience,
                candidate_profile_id: client.candidate_profile_id,
              }
            })
          )
        )
      }
    } catch (error) {
      console.error(error)
    }
  }

  // data injection
  const getData = async () => {
    // const alert = toast.loading("Loading...")

    try {
      setLoading(true)

      const data = await userService.getCandidates()
      setPageInfo(data.page)
      dispatch(
        setAllCandidates(
          data.data.candidate_profiles.map((client) => {
            return {
              profile_img: client.profile_img,
              active: client.active,
              candidate_status_id: client.candidate_status_id,
              fullname: client.fullname,
              location: client.location,
              primary_role: client.primary_interest?.interest_id,
              experience: client.primary_interest.years_of_experience,
              candidate_profile_id: client.candidate_profile_id,
            }
          })
        )
      )
      setStats({
        active: data.data.active_candidate_profiles,
        inActive: data.data.inactive_candidate_profiles,
        total: data.data.total_candidate_profiles,
      })
      // toast.update(alert, {
      //   render: "Done!",
      //   type: "success",
      //   isLoading: false,
      //   autoClose: 1000,
      // })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      // toast.update(alert, {
      //   render: `Something went wrong ${error}`,
      //   type: "error",
      //   isLoading: false,
      //   autoClose: 1000,
      // })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const data = useMemo(() => [...candidates], [candidates])

  const columns = useMemo(
    () => [
      {
        id: "IMG",
        Header: "Image",
        accessor: "profile_img",
      },
      {
        id: "AID",
        Header: "",
        accessor: "candidate_profile_id",
      },
      {
        Header: "Full Name",
        accessor: "fullname",
        Cell: ({ row }) => {
          return (
            <Link
              href={{
                pathname: "/candidates/[id]",
                query: { candidateID: row.values.AID },
              }}
            >
              <div className='flex items-center gap-3 cursor-pointer '>
                {row.values.IMG !== null ? (
                  <Image
                    src={row.values.IMG}
                    alt={row.values.fullname}
                    width={32}
                    height={32}
                    className='rounded-full'
                  />
                ) : (
                  <div className=' rounded-full font-bold bg-[#292D32] px-5 py-3 text-white'>
                    {row.values.fullname.charAt(0)}
                  </div>
                )}
                <p>{row.values.fullname}</p>
              </div>
            </Link>
          )
        },
      },
      ,
      // {
      //   Header: "Primary Role",
      //   accessor: "primary_role",
      // },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Experience",
        accessor: "experience",
        Cell: ({ row }) => {
          return (
            <div>
              {row.values.experience === undefined
                ? ""
                : row.values.experience > 1
                ? `${row.values.experience} Years`
                : `${row.values.experience} Year`}
            </div>
          )
        },
      },
      {
        Header: "Work Status",
        accessor: "candidate_status_id",
        Cell: ({ row }) => {
          return (
            <div
              className={` py-1 px-[6px] rounded-[2px] text-center  ${
                row.values.candidate_status_id === 1 &&
                "text-[#750101] bg-[#ff49491a]"
              } ${
                row.values.candidate_status_id === 2 &&
                "text-[#1872F2] bg-[#1872f21a]"
              } ${
                row.values.candidate_status_id === 3 &&
                "text-[#017D51] bg-[#49ffbd1a]"
              } ${
                row.values.candidate_status_id > 3 &&
                "text-[#BBAA15] bg-[#bbaa151a]"
              } `}
            >
              {row.values.candidate_status_id === 1
                ? "Not-Ready"
                : row.values.candidate_status_id === 2
                ? "In -Progress"
                : row.values.candidate_status_id === 3
                ? "Ready"
                : "Open To Offers"}
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

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: ["AID", "IMG"],
      },
    },
    useSortBy
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <ProfileLayout title='admin' sidebarLinks={adminSidebarLinks} admin={true}>
      {loading && <Loading />}
      <IconHeader iconName='profile-2user' label='Candidate' nav />
      <AdminStatsBanner
        total={stats.total}
        active={stats.active}
        inactive={stats.inActive}
        label='Candidates'
      />
      <SecContainer>
        <div className='  flex justify-between items-center my-5 '>
          <h3 className=' font-medium text-grey-2 text-t-20  '>User List </h3>
          {/* <ButtonColored label='Filter' bg='bg-[#00C373]' color='text-white' /> */}
        </div>
        <div>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableHeader
                      className='user-table-head'
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </TableHeader>
                  ))}
                </TableRow>
              ))}
            </TableHead>

            <TableBody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row)

                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell, idx) => {
                      return (
                        <TableData
                          className='user-table-row'
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </TableData>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>

        <Pagination handlePageClick={handlePageClick} pageInfo={pageInfo} />
      </SecContainer>
    </ProfileLayout>
  )
}

export default index
