import { useEffect } from 'react'
import { useEmployeeStore } from '../../store/employeeStore'
import CounterCard from '../CounterCard'

const EmployeesCounterCard = () => {
  const counter = useEmployeeStore((store) => store.counter)
  const getCounter = useEmployeeStore((store) => store.actions.getCounter)

  useEffect(() => {
    getCounter()
  }, [])

  return (
    <CounterCard
      headerName='Employees List'
      counter={String(counter)}
      footerName='View All Employees'
      viewAllPath='/employees'
    />
  )
}

export default EmployeesCounterCard
