import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { EmployeeContext, EmployeContextType } from '../../context/EmployeeContext'
import { Employee } from '../../store/model/employeeModel'

const EmployeesListItem = (props: {employee: Employee}) => {
  const employeeContext = useContext(EmployeeContext) as EmployeContextType
  
  const setShowEmployeeDetailsModal = employeeContext.setShowEmployeeDetailsModal
  const setShowUpdateEmployeeModal = employeeContext.setShowUpdateEmployeeModal
  
  return (
    <>
      <tr>
        <td>{props.employee.id}</td>
        <td>{props.employee.employeeId}</td>
        <td>{props.employee.name}</td>
        <td>{props.employee.email}</td>
        <td>
          <Button variant='primary' size='sm' style={{ width: '100%' }} onClick={() => setShowEmployeeDetailsModal(true)}>
            Details
          </Button>
        </td>
        <td>
          <Button variant='warning' size='sm' style={{ width: '100%' }} onClick={() => setShowUpdateEmployeeModal(true)}>
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
