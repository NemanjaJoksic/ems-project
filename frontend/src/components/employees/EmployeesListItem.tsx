import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { EmployeeContext, EmployeContextType } from '../../context/EmployeeContext'

const EmployeesListItem = () => {
  const employeeContext = useContext(EmployeeContext) as EmployeContextType
  
  const setShowEmployeeDetailsModal = employeeContext.setShowEmployeeDetailsModal
  const setShowUpdateEmployeeModal = employeeContext.setShowUpdateEmployeeModal
  
  return (
    <>
      <tr>
        <td>1</td>
        <td>741</td>
        <td>John Doe</td>
        <td>johndoe@gmail.com</td>
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
