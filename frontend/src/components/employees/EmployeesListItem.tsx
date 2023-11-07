import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import {
  EmployeeContext,
  EmployeContextType,
} from '../../context/EmployeeContext'
import { Employee } from '../../store/model/employeeModel'
import { useEmployeeStore } from '../../store/employeeStore'

const EmployeesListItem = (props: { employee: Employee }) => {
  const employeeContext = useContext(EmployeeContext) as EmployeContextType

  const setShowEmployeeDetailsModal =
    employeeContext.setShowEmployeeDetailsModal
  const setShowUpdateEmployeeModal = employeeContext.setShowUpdateEmployeeModal

  const getEmployeeById = useEmployeeStore(
    (store) => store.actions.getEmployeeById
  )

  const handleOpenEmployeeDetails = () => {
    getEmployeeById(props.employee.id)
    setShowEmployeeDetailsModal(true)
  }

  const handleOpenUpdateEmployee = () => {
    getEmployeeById(props.employee.id)
    setShowUpdateEmployeeModal(true)
  }

  return (
    <>
      <tr>
        <td>{props.employee.id}</td>
        <td>{props.employee.employeeId}</td>
        <td>{props.employee.firstName + ' ' + props.employee.lastName}</td>
        <td>{props.employee.email}</td>
        <td>
          <Button
            variant='primary'
            size='sm'
            style={{ width: '100%' }}
            onClick={handleOpenEmployeeDetails}
          >
            Details
          </Button>
        </td>
        <td>
          <Button
            variant='warning'
            size='sm'
            style={{ width: '100%' }}
            onClick={handleOpenUpdateEmployee}
          >
            Edit
          </Button>
        </td>
        <td>
          <Button variant='danger' size='sm' style={{ width: '100%' }}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  )
}

export default EmployeesListItem
