import { AdminStatsBanner, IconHeader } from "@/components/admin"
import { userService } from "@/services/index"
import { ProfileLayout } from "@/shared/components/layouts"
import { adminSidebarLinks } from "@/shared/data/profile"
import { useEffect, useState, useMemo } from "react"
import tw from "tailwind-styled-components"
import { useTable, useSortBy } from "react-table"
import { SecContainer } from "@/shared/components/containers"
import { ButtonColored } from "@/shared/components/buttons"
import Image from "next/image"
import Link from "next/link"
import { Pagination } from "@/shared/components"

const Table = tw.table`
table-fixed
 w-[100%]
`
const TableHead = tw.thead`

`

const TableRow = tw.tr`
text-left
`

const TableHeader = tw.th` text-t-16 font-regular text-grey-2  text-center `

const TableBody = tw.tbody`text-left
`

const TableData = tw.td`
text-t-14 font-regular text-grey-2 
p-5
`
function index() {
  const [clients, setClients] = useState([])
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
    if (event.selected === 0) {
      const data = await userService.getClientProfile()
      setPageInfo(data.page)
      setClients(data.data.client_profiles)
    } else {
      const data = await userService.getClientProfile(event.selected + 1)
      setPageInfo(data.page)
      setClients(data.data.client_profiles)
    }
  }

  const getData = async () => {
    const data = await userService.getClientProfile()
    setClients(data.data.client_profiles)
    setPageInfo(data.page)
    setStats({
      active: data.data.total_active_client_profiles,
      inActive: data.data.total_inactive_client_profiles,
      total: data.data.total_client_profiles,
    })
  }

  // const handleDetailClick = (id) => {
  //   router.push({
  //     pathname: '/client/[id]',
  //     query: { clientID: id },
  //   })
  // }

  useEffect(() => {
    getData()
  }, [])

  const data = useMemo(() => [...clients], [clients])

  const columns = useMemo(
    () => [
      {
        id: "IMG",
        Header: "Image",
        accessor: "company_logo",
      },
      {
        id: "CID",
        Header: "",
        accessor: "client_profile_id",
      },

      {
        Header: "Full Name",
        accessor: "company_name",
        Cell: ({ row }) => {
          return (
            <Link href={{pathname:'/client/[id]', query:{clientID: row.values.CID}}}>
              <div className='flex items-center gap-3'>
                {row.values.IMG !== null ? (
                  <Image
                    src={row.values.IMG}
                    alt={row?.values?.company_name}
                    className='rounded-full'
                    width={32}
                    height={32}
                  />
                ) : (
                  <div className=' rounded-full font-bold bg-[#292D32] px-5 py-3 text-white'>
                    {" "}
                    {row?.values?.company_name.charAt(0)}{" "}
                  </div>
                )}
                <p>{row?.values?.company_name}</p>
              </div>
            </Link>
          )
        },
      },
      {
        Header: "Company Type",
        accessor: "company_type",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Website",
        accessor: "company_website",
        Cell: ({ row }) => {
          return (
              <a href={`${row?.values?.company_website}`}>
                <p>{row?.values?.company_website}</p>
              </a>
          )}
      },
      {
        Header: "Activity",
        accessor: "active",
        Cell: ({ row }) => {
          return (
            <div className=' flex items-center justify-center '>
              <div
                className={` py-1 px-[6px] rounded-[2px] text-center ${
                  row.values.active === 0
                    ? "text-[#f218181a]  bg-[ #f21818] "
                    : "text-[#1872F2] bg-[#1872f21a] "
                } `}
              >
                {row.values.active === 0 ? "Inactive" : "Active"}
              </div>
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
        hiddenColumns: ["IMG", "CID"],
      },
    },
    useSortBy
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <ProfileLayout title='admin' sidebarLinks={adminSidebarLinks} admin>
      <IconHeader iconName='profile-2user' label='Client' nav />
      <AdminStatsBanner
        total={stats.total}
        active={stats.active}
        inactive={stats.inActive}
        label='Clients'
      />

      <SecContainer>
        <div className='  flex justify-between items-center my-5 '>
          <h3 className=' font-medium text-grey-2 text-t-20  '>Client List </h3>
          {/* <ButtonColored label='Filter' bg='bg-[#00C373]' color='text-white' /> */}
        </div>
        <div>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableHeader
                      className='client-table-head'
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
                          className='client-table-row'
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
