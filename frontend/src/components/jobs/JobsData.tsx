import { ListGroup } from 'react-bootstrap'

const JobsData = (props: {setShowModal: (showModal: boolean) => void}) => {
  const handleAddJob = () => {
    props.setShowModal(true)
  }

  return (
    <ListGroup>
      <ListGroup.Item style={{ background: 'dodgerblue', color: 'white' }}>
        Jobs Details
      </ListGroup.Item>
      <ListGroup.Item onClick={handleAddJob}>Add Job</ListGroup.Item>
      <ListGroup.Item>View All Jobs</ListGroup.Item>
    </ListGroup>
  )
}

export default JobsData
