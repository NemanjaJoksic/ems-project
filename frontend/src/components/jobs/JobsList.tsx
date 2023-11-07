import { Card, Table } from 'react-bootstrap'
import JobsListHeader from './JobsListHeader'
import JobsListItem from './JobsListItem'
import { useJobStore } from '../../store/jobStore'
import { useEffect } from 'react'

const JobsList = () => {
  const jobs = useJobStore((store) => store.jobs)
  const getJobs = useJobStore((store) => store.actions.getJobs)

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <Card style={{ border: 'none' }}>
      <Card.Header
        className='text-center'
        style={{ background: 'black', color: 'white' }}
      >
        Jobs List
      </Card.Header>
      <Table bordered size='sm'>
        <JobsListHeader />
        <tbody>
          {jobs.map((job) => (
            <JobsListItem job={job} />
          ))}
        </tbody>
      </Table>
    </Card>
  )
}

export default JobsList
