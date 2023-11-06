import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/userStore'
import { useState } from 'react'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const login = useUserStore((store) => store.actions.login)

  const handleLogin = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()

    const isLoggedIn = await login(username, password)

    if (isLoggedIn) {
      console.log('Used logged in successfully')
      navigate('/')
    } else {
      console.log('Invalid credentials')
    }
  }

  return (
    <Card style={{ width: '35%' }}>
      <Form>
        <Form.Label style={{ marginTop: '10px', height: '10px' }}>
          Login
        </Form.Label>
        <Form.Control
          style={{ marginTop: '10px', marginBottom: '10px' }}
          placeholder='Username'
          onChange={(event) => setUsername(event.target.value)}
        />
        <Form.Control
          style={{ marginTop: '10px', marginBottom: '10px' }}
          type='password'
          placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <Form.Check
          style={{ marginTop: '10px', marginBottom: '10px' }}
          type='checkbox'
          label='Remember Me'
        />
        <Button
          style={{ marginBottom: '10px', width: '100%' }}
          type='submit'
          onClick={handleLogin}
        >
          Login To Continue
        </Button>
      </Form>
    </Card>
  )
}

export default LoginForm
