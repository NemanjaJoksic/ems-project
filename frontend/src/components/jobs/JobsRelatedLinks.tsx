import { ListGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const JobsRelatedLinks = () => {
  const navigate = useNavigate()

  const handleViewAllEmployees = () => {
    navigate('/employees')  
  }

  return (
    <ListGroup>
      <ListGroup.Item style={{ background: 'dodgerblue', color: 'white' }}>
        Related Links
      </ListGroup.Item>
      <ListGroup.Item onClick={handleViewAllEmployees}>View All Employees</ListGroup.Item>
    </ListGroup>
  )
}

export default JobsRelatedLinks
