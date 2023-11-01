import { ListGroup } from 'react-bootstrap'

const JobsData = () => {
  return (
    <ListGroup>
      <ListGroup.Item style={{ background: 'dodgerblue', color: 'white' }}>
        Jobs Details
      </ListGroup.Item>
      <ListGroup.Item>Add Job</ListGroup.Item>
      <ListGroup.Item>View All Jobs</ListGroup.Item>
    </ListGroup>
  )
}

export default JobsData
