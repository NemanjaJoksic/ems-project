import { useContext, useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from 'react-bootstrap'
import {
  EmployeeContext,
  EmployeContextType,
} from '../../context/EmployeeContext'
import { useEmployeeStore } from '../../store/employeeStore'

const UpdateEmployeeModal = () => {
  const employeeContext = useContext(EmployeeContext) as EmployeContextType

  const showModal = employeeContext.showUpdateEmployeeModal
  const setShowModal = employeeContext.setShowUpdateEmployeeModal

  const isLoadingEmployee = useEmployeeStore((store) => store.isLoadingEmployee)
  const employee = useEmployeeStore((store) => store.employee)

  const [employeeCopy, setEmployeeCopy] = useState({ ...employee })

  const handleUpdateEmployee = () => {
    console.log('Updating employee: ' + JSON.stringify(employeeCopy))
    setShowModal(false)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  if (isLoadingEmployee) {
    return (
      <Modal show={showModal} style={{ backdropFilter: 'blur(5px)' }}>
        <Modal.Header style={{ background: 'black', color: 'white' }}>
          <Modal.Title>Update Employee Form</Modal.Title>
        </Modal.Header>
        <div className='row justify-content-center'>
          <Spinner animation='border' />
        </div>
      </Modal>
    )
  } else {
    return (
      <Modal show={showModal} style={{ backdropFilter: 'blur(5px)' }}>
        <Modal.Header style={{ background: 'black', color: 'white' }}>
          <Modal.Title>Update Employee Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container fluid>
              <Row>
                <Col>
                  <Form.Control
                    type='date'
                    size='sm'
                    style={{ marginBottom: '5px' }}
                    placeholder='Date'
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Control
                    readOnly={false}
                    size='sm'
                    style={{ marginTop: '5px', marginBottom: '5px' }}
                    placeholder='First Name'
                    defaultValue={employee?.firstName}
                    onChange={(e) =>
                      setEmployeeCopy({
                        ...employeeCopy,
                        firstName: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    size='sm'
                    style={{ marginTop: '5px', marginBottom: '5px' }}
                    placeholder='Last Name'
                    defaultValue={employee?.lastName}
                    onChange={(e) =>
                      setEmployeeCopy({
                        ...employeeCopy,
                        lastName: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Control
                    size='sm'
                    style={{ marginTop: '5px', marginBottom: '5px' }}
                    placeholder='Email'
                    defaultValue={employee?.email}
                    onChange={(e) =>
                      setEmployeeCopy({
                        ...employeeCopy,
                        email: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    size='sm'
                    style={{ marginTop: '5px', marginBottom: '5px' }}
                    placeholder='Phone Number'
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Select
                    size='sm'
                    style={{ marginTop: '5px', marginBottom: '5px' }}
                  >
                    <option>Open this select menu</option>
                    <option value='1'>Software Engineer</option>
                    <option value='2'>Product Manager</option>
                    <option value='3'>UI/UX Designer</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col md={9}>
                  <Button
                    variant='success'
                    size='sm'
                    style={{
                      width: '100%',
                      marginTop: '5px',
                      marginBottom: '5px',
                    }}
                    onClick={handleUpdateEmployee}
                  >
                    Update Employee
                  </Button>
                </Col>
                <Col md={3}>
                  <Button
                    variant='warning'
                    size='sm'
                    style={{
                      width: '100%',
                      marginTop: '5px',
                      marginBottom: '5px',
                    }}
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default UpdateEmployeeModal
