import { Card, Table } from 'react-bootstrap'
import JobsListHeader from './JobsListHeader'
import JobsListItem from './JobsListItem'

const JobsList = () => {
  return (
    <Card style={{border: 'none'}}>
      <Card.Header
        className='text-center'
        style={{ background: 'black', color: 'white' }}
      >
        Jobs List
      </Card.Header>
      <Table bordered size='sm'>
        <JobsListHeader />
        <tbody>
          <JobsListItem />
          <JobsListItem />
          <JobsListItem />
        </tbody>
      </Table>
    </Card>
  )
}

export default JobsList
