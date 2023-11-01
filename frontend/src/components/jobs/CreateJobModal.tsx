import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'

const CreateJobModal = (props: {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}) => {
  const handleAddEmployee = () => {
    console.log('Adding job')
    props.setShowModal(false)
  }

  const handleClose = () => {
    console.log('Closing modal')
    props.setShowModal(false)
  }

  return (
    <Modal show={props.showModal} style={{ backdropFilter: 'blur(5px)' }}>
      <Modal.Header style={{ background: 'black', color: 'white' }}>
        Create Job Form
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
              <Col>
                <Form.Control
                  size='sm'
                  style={{ marginTop: '5px', marginBottom: '5px' }}
                  placeholder='Job Name'
                />
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

export default CreateJobModal
