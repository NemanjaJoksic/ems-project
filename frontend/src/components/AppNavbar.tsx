import { Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const AppNavbar = () => {
  return (
    <Navbar style={{ marginBottom: '10px' }}>
      <Container fluid>
        <Navbar.Brand href='/home'>EMS2.0</Navbar.Brand>
        <Nav activeKey={useLocation().pathname} className='me-auto'>
          <Nav.Link href='/home'>Home</Nav.Link>
          <Nav.Link href='/employees'>Employees</Nav.Link>
          <Nav.Link href='/jobs'>Jobs</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
