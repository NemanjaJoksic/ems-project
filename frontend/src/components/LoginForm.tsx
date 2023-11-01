import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()

  const handleFormSubmit = () => {
    console.log('User logged in')
    navigate('/home')
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
        />
        <Form.Control
          style={{ marginTop: '10px', marginBottom: '10px' }}
          type='password'
          placeholder='Password'
        />
        <Form.Check
          style={{ marginTop: '10px', marginBottom: '10px' }}
          type='checkbox'
          label='Remember Me'
        />
        <Button
          style={{ marginBottom: '10px', width: '100%' }}
          type='submit'
          onClick={handleFormSubmit}
        >
          Login To Continue
        </Button>
      </Form>
    </Card>
  )
}

export default LoginForm
