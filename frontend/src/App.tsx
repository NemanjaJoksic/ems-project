import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import EmployeesListPage from './pages/EmployeesListPage'
import JobsListPage from './pages/JobsListPage'
import AppNavbar from './components/AppNavbar'
import { VideoSharingWebsiteProvider } from './context/EmployeeContext'

const App = () => {
  return (
    <div>
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
