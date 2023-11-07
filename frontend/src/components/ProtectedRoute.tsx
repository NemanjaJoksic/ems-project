import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserStore } from '../store/userStore'

const ProtectedRoute = (props: { children?: ReactNode }) => {
  const isUsedLoggedIn = useUserStore((store) => store.actions.isUsedLoggedIn)

  if (isUsedLoggedIn()) {
    console.log('User is logged in')
    return <>{props.children}</>
  } else {
    console.log('User is not logged in. Redirect to login page')
    return <Navigate to='/login' />
  }
}

export default ProtectedRoute
