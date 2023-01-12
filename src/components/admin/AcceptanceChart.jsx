import { userService } from "@/services/user.service"
import { SecContainer } from "@/shared/components/containers"
import moment from "moment"
import { useState, useEffect, useMemo } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export const AcceptanceChart = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const data = await userService.getAcceptanceRate()
    setData(data.data.daily_acceptance_count.reverse())
  }

  const chartData = useMemo(() => {
    return data
  }, [data])

  useEffect(() => {
    getData()
  }, [])

  return (
    <SecContainer py='py-5' px='px-5'>
      <div className='h-[320px] flex flex-col gap-6'>
        <div className='flex justify-between items-center '>
          <div>
            <h3 className=' font-medium  text-[#05162E] text-t-18  '>
              Offer Acceptance Rate (%)
            </h3>
            <p className='text-t-12 font-medium text-[#808281]  '>
              Last 30 Days
            </p>
          </div>
        </div>

        <div>
          <ResponsiveContainer width='100%' height={250}>
            <LineChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: -40,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='0 1 0' vertical={false} />
              <XAxis
                dataKey='date'
                tickFormatter={(item) => {
                  return moment(item).format("DD MMM")
                }}
                type='category'
                tickLine={false}
                axisLine={false}
              />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />

              <Line
                type='basis'
                dataKey='count'
                stroke='#8884d8'
                activeDot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </SecContainer>
  )
}
