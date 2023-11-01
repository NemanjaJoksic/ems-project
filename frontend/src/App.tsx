import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import EmployeesListPage from './pages/EmployeesListPage'
import JobsListPage from './pages/JobsListPage'
import AppNavbar from './components/AppNavbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/employees' element={<EmployeesListPage />} />
          <Route path='/jobs' element={<JobsListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
