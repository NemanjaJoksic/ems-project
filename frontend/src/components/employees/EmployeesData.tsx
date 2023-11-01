import { ListGroup } from 'react-bootstrap'

const EmployeesData = () => {
  return (
    <ListGroup>
      <ListGroup.Item style={{ background: 'dodgerblue', color: 'white' }}>
        Employees Details
      </ListGroup.Item>
      <ListGroup.Item>Add Employee</ListGroup.Item>
      <ListGroup.Item>View All Employees</ListGroup.Item>
    </ListGroup>
  )
}

export default EmployeesData
