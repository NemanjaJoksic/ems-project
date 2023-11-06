import { Button, Card } from 'react-bootstrap'

export type CounterCardProps = {
  headerName: string
  footerName: string
  counter: string
  viewAllPath: string
}

const CounterCard = (props: CounterCardProps) => {  
  return (
    <Card style={{ background: 'dodgerblue', color: 'white' }}>
      <Card.Header className='text-center'>{props.headerName}</Card.Header>
      <Card.Body className='fs-1 text-center' style={{ height: '100px' }}>
        {props.counter}
      </Card.Body>
      <Card.Footer className='text-center'>
        <Button
          href={props.viewAllPath}
          style={{ background: 'transparent', width: '100%', border: 'none' }}
        >
          {props.footerName}
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default CounterCard
