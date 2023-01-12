import { userService } from "@/services/user.service"
import { SecContainer } from "@/shared/components/containers"
import moment from "moment"
import { useState, useEffect, useMemo } from "react"
// import React, { PureComponent } from "react"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export const ActivityChart = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const data = await userService.getActivityScore()
    setData(data.data.reverse())
  }

  const chartData = useMemo(() => {
    return data
  }, [data])

  useEffect(() => {
    getData()
  }, [])

  return (
    <SecContainer py='py-5' px='px-5'>
      <div className='h-[320px] '>
        <div className='flex flex-col  gap-6   '>
          <div className='flex justify-between items-center  '>
            <div className=''>
              <h3 className=' font-medium  text-[#05162E] text-t-18  '>
                Activity Score{" "}
              </h3>
              <p className='text-t-12 font-medium text-[#808281]  '>
                Last 30 Days
              </p>
            </div>

            <div className=' flex gap-[15px]   '>
              <div className='flex gap-[6px] items-center   '>
                <div className='bg-[#00D0FF] w-2 h-2 rounded-full'></div>
                <h4 className='text-t-12 font-medium '>Candidate</h4>
              </div>
              <div className='flex gap-[6px] items-center   '>
                <div className='bg-[#3246D3] w-2 h-2 rounded-full'></div>
                <h4 className='text-t-12 font-medium '>Client</h4>
              </div>
            </div>
          </div>

          <div className='  '>
            <ResponsiveContainer width='100%' height={250}>
              <BarChart
                width={500}
                height={300}
                data={chartData}
                barCategoryGap={"50%"}
                barGap={"20%"}
                margin={{
                  top: 5,

                  left: -30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray='0 1 0' vertical={false} />
                <XAxis
                  dataKey='date'
                  tickLine={false}
                  tickFormatter={(item) => {
                    return moment(item).format("DD MMM")
                  }}
                  type='category'
                  axisLine={false}
                />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />

                <Bar
                  dataKey='candidates_login_count'
                  fill='#00D0FF'
                  barSize={10}
                />
                <Bar
                  dataKey='clients_login_count'
                  fill='#3246D3'
                  barSize={10}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SecContainer>
  )
}
