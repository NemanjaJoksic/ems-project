import { Col, Container, Row } from 'react-bootstrap'
import ProtectedRoute from '../components/ProtectedRoute'
import EmployeesCounterCard from '../components/employees/EmployeesCounterCard'
import JobsCounterCard from '../components/jobs/JobsCounterCard'

const HomePage = () => {
  return (
    <ProtectedRoute
      children={
        <Container fluid className='row justify-content-center'>
          <Row style={{ width: '60%' }}>
            <Col>
              <EmployeesCounterCard />
            </Col>
            <Col>
              <JobsCounterCard />
            </Col>
          </Row>
        </Container>
      }
    />
  )
}

export default HomePage
