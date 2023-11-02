import { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { EmployeeContext, EmployeContextType } from '../../context/EmployeeContext'

const EmployeesData = () => {
  const employeeContext = useContext(EmployeeContext) as EmployeContextType
  
  const setShowModal = employeeContext.setShowCreateEmployeeModal

  const handleAddEmployee = () => {
    setShowModal(true)
  }

  return (
    <ListGroup>
      <ListGroup.Item style={{ background: 'dodgerblue', color: 'white' }}>
        Employees Details
      </ListGroup.Item>
      <ListGroup.Item onClick={handleAddEmployee}>Add Employee</ListGroup.Item>
      <ListGroup.Item>View All Employees</ListGroup.Item>
    </ListGroup>
  )
}

export default EmployeesData
