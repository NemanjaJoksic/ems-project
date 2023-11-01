import { Container, Row, Col } from 'react-bootstrap'
import JobsData from '../components/jobs/JobsData'
import JobsRelatedLinks from '../components/jobs/JobsRelatedLinks'
import JobsList from '../components/jobs/JobsList'

const JobsListPage = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Row
            style={{
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <JobsData />
          </Row>
          <Row
            style={{
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <JobsRelatedLinks />
          </Row>
        </Col>
        <Col
          md={9}
          style={{
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <JobsList />
        </Col>
      </Row>
    </Container>
  )
}

export default JobsListPage
