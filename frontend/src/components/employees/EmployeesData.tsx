import { ListGroup } from 'react-bootstrap'

const EmployeesData = (props: {setShowModal: (showModal: boolean) => void}) => {
  const handleAddEmployee = () => {
    props.setShowModal(true)
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
