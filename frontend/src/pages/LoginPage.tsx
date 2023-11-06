import { Container } from 'react-bootstrap'
import LoginForm from '../components/LoginForm'
import { useUserStore } from '../store/userStore'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const getLoggedInUser = useUserStore((store) => store.actions.getLoggedInUser)

  if (getLoggedInUser() !== undefined) {
    return <Navigate to='/' />
  } else {
    return (
      <Container className='row justify-content-center'>
        <LoginForm />
      </Container>
    )
  }
}

export default LoginPage
