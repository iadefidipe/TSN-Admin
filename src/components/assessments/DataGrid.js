import { assessmentsData } from '@/shared/data/assessments'
import React from 'react'
import { useSelector } from 'react-redux';
import { GridCard } from './GridCard'


export const DataGrid = () => {

  const { currentFilter } = useSelector((state) => state.assessments);

  const filteredData = currentFilter.startsWith('All') ? assessmentsData : assessmentsData.filter((item) => item.filter === currentFilter)
  
  return (
    <div className='grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4'>
        {filteredData.map((item) => {
            return <GridCard {...item} key={item.id}/>
        })}
    </div>
  )
}
