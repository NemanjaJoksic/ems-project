import { useEffect } from 'react'
import { useJobStore } from '../../store/jobStore'
import CounterCard from '../CounterCard'

const JobsCounterCard = () => {
  const counter = useJobStore((store) => store.counter)
  const getCounter = useJobStore((store) => store.actions.getCounter)

  useEffect(() => {
    getCounter()
  }, [])

  return (
    <CounterCard
      headerName='Jobs List'
      counter={String(counter)}
      footerName='View All Jobs'
      viewAllPath='/jobs'
    />
  )
}

export default JobsCounterCard
