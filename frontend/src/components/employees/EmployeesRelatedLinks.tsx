import ListGroup from 'react-bootstrap/esm/ListGroup'
import { useNavigate } from 'react-router-dom'

const EmployeesRelatedLinks = () => {
  const navigate = useNavigate()

  const handleViewAllJobs = () => {
    navigate('/jobs')  
  }

  return (
    <ListGroup>
      <ListGroup.Item style={{ background: 'dodgerblue', color: 'white' }}>
        Related Links
      </ListGroup.Item>
      <ListGroup.Item onClick={handleViewAllJobs}>View All Jobs</ListGroup.Item>
    </ListGroup>
  )
}

export default EmployeesRelatedLinks
