import { Nav, Container } from 'react-bootstrap'

const Header = () => {
  const date = new Date()
  return (
    <Nav className='bg-primary p-2 background'>
      <Container className='d-flex justify-content-between align-items-center'>
        <h3 className='fw-bold' style={{ fontFamily: 'Helvetica' }}>Weekely Habits</h3>

        <span style={{ fontSize: '20px',fontFamily:"sans-serif" }}>{date.toDateString()}</span>

      </Container>
    </Nav>
  )
}

export default Header