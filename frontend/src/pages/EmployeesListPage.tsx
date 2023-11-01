import { Col, Container, Row } from 'react-bootstrap'
import EmployeesData from '../components/employees/EmployeesData'
import EmployeesList from '../components/employees/EmployeesList'
import EmployeesRelatedLinks from '../components/employees/EmployeesRelatedLinks'

const EmployeesListPage = () => {
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
            <EmployeesData />
          </Row>
          <Row
            style={{
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <EmployeesRelatedLinks />
          </Row>
        </Col>
        <Col
          md={9}
          style={{
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <EmployeesList />
        </Col>
      </Row>
    </Container>
  )
}

export default EmployeesListPage
