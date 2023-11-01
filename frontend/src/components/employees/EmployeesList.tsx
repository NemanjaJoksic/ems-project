import { Card, Table } from 'react-bootstrap'
import EmployeesListItem from './EmployeesListItem'
import EmployeesListItemHeader from './EmployeesListItemHeader'

const EmployeesList = () => {
  return (
    <Card style={{border: 'none'}}>
      <Card.Header
        className='text-center'
        style={{ background: 'black', color: 'white' }}
      >
        Employees List
      </Card.Header>
      <Table>
        <EmployeesListItemHeader />
        <tbody>
          <EmployeesListItem />
          <EmployeesListItem />
          <EmployeesListItem />
          <EmployeesListItem />
          <EmployeesListItem />
          <EmployeesListItem />
        </tbody>
      </Table>
    </Card>
  )
}

export default EmployeesList
