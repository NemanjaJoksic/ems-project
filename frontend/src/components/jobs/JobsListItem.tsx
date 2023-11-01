import { Button } from "react-bootstrap"

const JobsListItem = () => {
  return (
    <>
      <tr>
        <td>1</td>
        <td>Software Engineer</td>
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
