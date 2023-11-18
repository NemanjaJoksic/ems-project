import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import EmployeesListPage from './pages/EmployeesListPage'
import JobsListPage from './pages/JobsListPage'
import AppNavbar from './components/AppNavbar'
import { VideoSharingWebsiteProvider } from './context/EmployeeContext'
import { useCounterStore } from './store/counterStore'
import { Button } from 'react-bootstrap'

const App = () => {
  const counter = useCounterStore(store => store.counter)
  const increment = useCounterStore(store => store.actions.increment)

  return (
    <div>
      {/* counter: {counter}
      <Button onClick={() => increment()} >Increment</Button> */}

      <VideoSharingWebsiteProvider>
        <BrowserRouter>
          <AppNavbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/employees' element={<EmployeesListPage />} />
            <Route path='/jobs' element={<JobsListPage />} />
          </Routes>
        </BrowserRouter>
      </VideoSharingWebsiteProvider>
    </div>
  )
}

export default App
