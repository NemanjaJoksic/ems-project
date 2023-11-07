import { Card, Table } from 'react-bootstrap'
import EmployeesListItem from './EmployeesListItem'
import EmployeesListItemHeader from './EmployeesListItemHeader'
import { useEmployeeStore } from '../../store/employeeStore'
import { useEffect } from 'react'

const EmployeesList = () => {
  const employees = useEmployeeStore((store) => store.employees)
  const getEmployees = useEmployeeStore((store) => store.actions.getEmployees)

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <Card style={{ border: 'none' }}>
      <Card.Header
        className='text-center'
        style={{ background: 'black', color: 'white' }}
      >
        Employees List
      </Card.Header>
      <Table bordered size='sm'>
        <EmployeesListItemHeader />
        <tbody>
          {employees.map((employee) => (
            <EmployeesListItem employee={employee} />
          ))}
        </tbody>
      </Table>
    </Card>
  )
}

export default EmployeesList
