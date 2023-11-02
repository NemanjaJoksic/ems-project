import React, { useContext } from 'react'
import { Button, Col, Container, Modal, Row, Table } from 'react-bootstrap'
import {
  EmployeContextType,
  EmployeeContext,
} from '../../context/EmployeeContext'

const EmployeeDetailsModal = () => {
  const employeeContext = useContext(EmployeeContext) as EmployeContextType

  const showModal = employeeContext.showEmployeeDetailsModal
  const setShowModal = employeeContext.setShowEmployeeDetailsModal
  const setShowUpdateEmployeeModal = employeeContext.setShowUpdateEmployeeModal

  return (
    <Modal show={showModal} style={{ backdropFilter: 'blur(5px)' }}>
      <Modal.Header style={{ background: 'black', color: 'white' }}>
        <Modal.Title>Employee Details</Modal.Title>
      </Modal.Header>
      <Table bordered>
        <tbody>
          <tr>
            <td>
              <b>ID</b>
            </td>
            <td>1</td>
          </tr>
          <tr>
            <td>
              <b>Employee ID</b>
            </td>
            <td>123</td>
          </tr>
          <tr>
            <td>
              <b>First Name</b>
            </td>
            <td>Nemanja</td>
          </tr>
          <tr>
            <td>
              <b>Last Name</b>
            </td>
            <td>Joksic</td>
          </tr>
          <tr>
            <td>
              <b>Email</b>
            </td>
            <td>test@mail.com</td>
          </tr>
          <tr>
            <td>
              <b>Phone Number</b>
            </td>
            <td>064123456</td>
          </tr>
          <tr>
            <td>
              <b>Job</b>
            </td>
            <td>Software Engineer</td>
          </tr>
        </tbody>
      </Table>
      <div
        className='d-flex'
        style={{
          marginBottom: '15px',
          marginRight: '15px',
          justifyContent: 'right',
        }}
      >
        <Button
          variant='warning'
          size='sm'
          style={{ marginRight: '10px' }}
          onClick={() => {
            setShowModal(false)
            setShowUpdateEmployeeModal(true)
          }}
        >
          Edit Details
        </Button>
        <Button size='sm' onClick={() => setShowModal(false)}>
          Close
        </Button>
      </div>
    </Modal>
  )
}

export default EmployeeDetailsModal
