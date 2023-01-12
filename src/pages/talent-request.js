import { AdminStatsBanner, IconHeader } from "@/components/admin"
import { JobMatchCard } from "@/shared/components/cards"
import { SecContainer } from "@/shared/components/containers"
import { ProfileLayout } from "@/shared/components/layouts"
import { adminSidebarLinks } from "@/shared/data/profile"
import { useEffect } from "react"
import { userService } from "../services"
import tw from "tailwind-styled-components"
import { useTable, useSortBy } from "react-table"
import { useMemo, useState } from "react"
import { Pagination } from "@/shared/components"
import moment from "moment/moment"
import TableDrop from "@/components/admin/TableDrop"
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

const TableHeader = tw.th`

text-t-16 font-regular text-grey-2 py-5 text-center

`

const TableBody = tw.tbody`


`

const TableData = tw.td`
text-t-14 font-regular text-grey-2

p-5
`

function Request() {
  const [requests, setRequests] = useState([])
  const [pageInfo, setPageInfo] = useState({
    current_page: 1,
    last_page: 26,
    next_page: 2,
    previous_page: null,
    size: 10,
    total: 252,
    total_pages: 0,
  })

  const [modal, setModal] = useState(false)
  const [modalData, setModalData] = useState({})

  const getData = async () => {
    const data = await userService.getTalentRequest()

    setPageInfo(data.page)
    setRequests(
      data.data.map((item) => {
        return {
          position: item.job_opening.job_title,
          client: item.client_profile.company_name,
          candidate: item.candidate_profile.fullname,
          date_created: moment(item.date_created).format("DD/MM/YY"),
          status: item.position_match_status.position_match_status,
          candidate_email: item.candidate_profile.email,
          client_email: item.client_profile.email,
          candidate_id: item.candidate_profile_id,
          client_id: item.client_profile_id,
          position_id: item.position_match_id,
        }
      })
    )
  }

  const handlePageClick = async (event) => {
    if (event.selected === 0) {
      const data = await userService.getTalentRequest()
      setPageInfo(data.page)
      setRequests(
        data.data.map((item) => {
          return {
            position: item.job_opening.job_title,
            client: item.client_profile.company_name,
            candidate: item.candidate_profile.fullname,
            date_created: moment(item.date_created).format("DD/MM/YY"),
            status: item.position_match_status.position_match_status,
            candidate_email: item.candidate_profile.email,
            client_email: item.client_profile.email,
            candidate_id: item.candidate_profile_id,
            client_id: item.client_profile_id,
            position_id: item.position_match_id,
          }
        })
      )
    } else {
      const data = await userService.getTalentRequest(event.selected + 1)
      setPageInfo(data.page)
      setRequests(
        data.data.map((item) => {
          return {
            position: item.job_opening.job_title,
            client: item.client_profile.company_name,
            candidate: item.candidate_profile.fullname,
            date_created: moment(item.date_created).format("DD/MM/YY"),
            status: item.position_match_status.position_match_status,
            candidate_email: item.candidate_profile.email,
            client_email: item.client_profile.email,
            candidate_id: item.candidate_profile_id,
            client_id: item.client_profile_id,
            position_id: item.position_match_id,
          }
        })
      )
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const data = useMemo(() => [...requests], [requests])

  const columns = useMemo(
    () => [
      {
        id: "EML",
        Header: "",
        accessor: "candidate_email",
      },
      {
        id: "AID",
        Header: "",
        accessor: "client_email",
      },
      {
        id: "CID",
        Header: "",
        accessor: "candidate_id",
      },
      {
        id: "PID",
        Header: "",
        accessor: "position_id",
      },
      {
        id: "ClID",
        Header: "",
        accessor: "client_id",
      },
      {
        Header: "Position",
        accessor: "position",
      },

      {
        Header: "Candidate",
        accessor: "candidate",
      },
      {
        Header: "Client",
        accessor: "client",
      },
      {
        Header: "Date Created",
        accessor: "date_created",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => {
          return (
            <button
              className={` py-1 px-[6px] rounded-[2px] text-center text-[#1872F2] bg-[#1872f21a] `}
              onClick={() => {
                setModal(true)
                setModalData({
                  status: row.values.status,
                  candidate: row.values.candidate,
                  position: row.values.position,
                  id: row.values.CID,
                  client_id: row.values.ClID,
                  position_id: row.values.PID,
                })
              }}
            >
              {row.values.status}
            </button>
          )
        },
      },
      {
        Header: "Contact Candidate",
        accessor: "",
        Cell: ({ row }) => {
          return (
            <a
              className={` py-1 px-[6px] rounded-[2px] text-center 
                   text-[background: #017D51;] `}
              href={`mailto:${row.values.EML}`}
            >
              <Image
                src={`${process.env.deploymentPath}/icons/icon/directbox-send.svg`}
                alt='Candidate'
                width={24}
                height={24}
              />
            </a>
          )
        },
      },
      {
        Header: "Contact Client",
        accessor: "",
        Cell: ({ row }) => {
          return (
            <a
              className={` py-1 px-[6px] rounded-[2px] text-center 
                   text-[#BBAA15] bg-[##bbaa151a] `}
              href={`mailto:${row.values.AID}`}
            >
              <Image
                src={`${process.env.deploymentPath}/icons/icon/directbox-send.svg`}
                alt='Client'
                width={24}
                height={24}
              />
            </a>
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
        hiddenColumns: ["AID", "EML", "CID", "ClID", "PID"],
      },
    },
    useSortBy
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <ProfileLayout title='admin' sidebarLinks={adminSidebarLinks} admin>
      <SecContainer py='py-[43px]'>
        <h2 className=' text-t-40  font-bold text-grey-2 '>Talent Request</h2>

        <div>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableHeader
                      className='talent-table-head'
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
                          className='talent-table-row'
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
      {modal && (
        <TableDrop
          data={modalData}
          setOpenModal={setModal}
          client={modalData?.client_id}
          positionID={modalData?.position_id}
          setRequests={setRequests}
        />
      )}
    </ProfileLayout>
  )
}

export default Request

{
  /* <div className="flex flex-wrap gap-6 mt-[45px] px-5" >
<JobMatchCard percent="95" />
<JobMatchCard percent="95" />
<JobMatchCard percent="95" />
<JobMatchCard percent="95" />
<JobMatchCard percent="95" />
<JobMatchCard percent="95" />

</div> */
}
