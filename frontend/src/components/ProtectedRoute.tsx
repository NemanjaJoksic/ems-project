import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserStore } from '../store/userStore'

const ProtectedRoute = (props: {children?: ReactNode}) => {
  const getLoggedInUser = useUserStore((store) => store.actions.getLoggedInUser)

  if (getLoggedInUser() === undefined) {
    console.log('User is not logged in. Redirect to login page')
    return <Navigate to='/login' />
  } else {
    console.log('User is logged in')
    return <>{props.children}</>
  }
}

export default ProtectedRoute
