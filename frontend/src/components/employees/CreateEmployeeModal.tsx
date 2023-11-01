import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'

const CreateEmployeeModal = (props: {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}) => {
  const handleAddEmployee = () => {
    console.log('Adding employee')
    props.setShowModal(false)
  }

  const handleClose = () => {
    console.log('Closing modal')
    props.setShowModal(false)
  }

  return (
    <Modal show={props.showModal} style={{ backdropFilter: 'blur(5px)' }}>
      <Modal.Header style={{ background: 'black', color: 'white' }}>
        Create Employee Form
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
                  size='sm'
                  style={{ marginTop: '5px', marginBottom: '5px' }}
                  placeholder='First Name'
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  size='sm'
                  style={{ marginTop: '5px', marginBottom: '5px' }}
                  placeholder='Last Name'
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Control
                  size='sm'
                  style={{ marginTop: '5px', marginBottom: '5px' }}
                  placeholder='Email'
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
                  onClick={handleAddEmployee}
                >
                  Add Employee
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

export default CreateEmployeeModal
