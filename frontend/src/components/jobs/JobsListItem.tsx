import { Button } from 'react-bootstrap'
import { Job } from '../../store/model/jobModel'

const JobsListItem = (props: { job: Job }) => {
  return (
    <>
      <tr>
        <td>{props.job.id}</td>
        <td>{props.job.name}</td>
        <td>
          <Button variant='primary' size='sm' style={{ width: '100%' }}>
            Details
          </Button>
        </td>
        <td>
          <Button variant='warning' size='sm' style={{ width: '100%' }}>
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

export default JobsListItem
