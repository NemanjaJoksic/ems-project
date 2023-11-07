import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/userStore'
import { useEffect } from 'react'

const AppNavbar = () => {
  const navigate = useNavigate()

  const user = useUserStore((store) => store.user)
  const isUsedLoggedIn = useUserStore((store) => store.actions.isUsedLoggedIn)
  const getUser = useUserStore((store) => store.actions.getUser)
  const logout = useUserStore((store) => store.actions.logout)

  useEffect(() => {
    getUser()
  }, [])

  return (
    <Navbar style={{ marginBottom: '10px' }}>
      <Container fluid>
        <Navbar.Brand href='/home'>EMS2.0</Navbar.Brand>
        <Nav activeKey={useLocation().pathname} className='me-auto'>
          <Nav.Link href='/home'>Home</Nav.Link>
          <Nav.Link href='/employees'>Employees</Nav.Link>
          <Nav.Link href='/jobs'>Jobs</Nav.Link>
        </Nav>
        <div hidden={!isUsedLoggedIn()} className='justify-content-end'>
          {user?.firstName + ' ' + user?.lastName + ' '}
          <Button
            size='sm'
            onClick={() => {
              logout()
              navigate('/login')
              console.log('Logout')
            }}
          >
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
