import { Col, Container, Row } from 'react-bootstrap'
import CounterCard from '../components/CounterCard'

const HomePage = () => {
  return (
    <Container fluid className='row justify-content-center'>
      <Row style={{ width: '60%' }}>
        <Col>
          <CounterCard
            headerName='Employees List'
            counter='123'
            footerName='View All Employees'
            viewAllPath='/employees'
          />
        </Col>
        <Col>
          <CounterCard
            headerName='Jobs List'
            counter='32'
            footerName='View All Jobs'
            viewAllPath='/jobs'
          />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
