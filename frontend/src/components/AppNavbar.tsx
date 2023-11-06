import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/userStore'

const AppNavbar = () => {
  const navigate = useNavigate()

  const getLoggedInUser = useUserStore((store) => store.actions.getLoggedInUser)
  const logout = useUserStore((store) => store.actions.logout)

  return (
    <Navbar style={{ marginBottom: '10px' }}>
      <Container fluid>
        <Navbar.Brand href='/home'>EMS2.0</Navbar.Brand>
        <Nav activeKey={useLocation().pathname} className='me-auto'>
          <Nav.Link href='/home'>Home</Nav.Link>
          <Nav.Link href='/employees'>Employees</Nav.Link>
          <Nav.Link href='/jobs'>Jobs</Nav.Link>
        </Nav>
        <Button
          hidden={getLoggedInUser() === undefined}
          className='justify-content-end'
          size='sm'
          onClick={() => {
            logout()
            navigate('/login')
            console.log('Logout')
          }}
        >
          Logout
        </Button>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
