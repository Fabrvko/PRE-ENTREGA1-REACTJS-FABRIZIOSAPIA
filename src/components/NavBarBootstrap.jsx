import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cart from './CartWidgtet/assets/shopcart.svg'

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">UMORA SHOES</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#nosotros">NOSOTROS</Nav.Link>
            <NavDropdown title="MODELOS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#nike">NIKE</NavDropdown.Item>
              <NavDropdown.Item href="#jordan">
                JORDAN
              </NavDropdown.Item>
              <NavDropdown.Item href="#vans">
                VANS
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <img src={cart} alt="cart-widget"/> 0
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;