import { Container, Row, Col } from 'react-bootstrap'
import JobsData from '../components/jobs/JobsData'
import JobsRelatedLinks from '../components/jobs/JobsRelatedLinks'
import JobsList from '../components/jobs/JobsList'
import { useState } from 'react'
import CreateJobModal from '../components/jobs/CreateJobModal'
import ProtectedRoute from '../components/ProtectedRoute'

const JobsListPage = () => {
  const [showModal, setShowModal] = useState(false)

  const PageContent = () => {
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
              <JobsData setShowModal={setShowModal} />
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

  if (showModal) {
    return (
      <ProtectedRoute
        children={
          <Container>
            <PageContent />
            <CreateJobModal showModal={showModal} setShowModal={setShowModal} />
          </Container>
        }
      />
    )
  } else {
    return <ProtectedRoute children={<PageContent />} />
  }
}

export default JobsListPage
