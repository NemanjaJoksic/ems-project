import { Col, Container, Row } from 'react-bootstrap'
import EmployeesData from '../components/employees/EmployeesData'
import EmployeesList from '../components/employees/EmployeesList'
import EmployeesRelatedLinks from '../components/employees/EmployeesRelatedLinks'
import CreateEmployeeModal from '../components/employees/CreateEmployeeModal'
import { useContext } from 'react'
import { EmployeeContext, EmployeContextType } from '../context/EmployeeContext'
import EmployeeDetailsModal from '../components/employees/EmployeeDetailsModal'
import UpdateEmployeeModal from '../components/employees/UpdateEmployeeModal'

const EmployeesListPage = () => {
  const employeeContext = useContext(EmployeeContext) as EmployeContextType

  const showCreateEmployeeModal = employeeContext.showCreateEmployeeModal
  const showUpdateEmployeeModal = employeeContext.showUpdateEmployeeModal
  const showEmployeeDetailsModal = employeeContext.showEmployeeDetailsModal

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

  if (showCreateEmployeeModal) {
    return (
      <Container>
        <PageContent />
        <CreateEmployeeModal />
      </Container>
    )
  } else if (showEmployeeDetailsModal) {
    return (
      <Container>
        <PageContent />
        <EmployeeDetailsModal />
      </Container>
    )
  } else if (showUpdateEmployeeModal) {
    return (
      <Container>
        <PageContent />
        <UpdateEmployeeModal />
      </Container>
    )
  } else {
    return <PageContent />
  }
}

export default EmployeesListPage
