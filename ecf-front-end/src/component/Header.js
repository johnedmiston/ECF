import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ECFlogo from './Image/ECFlogo.png';
import { Button } from 'react-bootstrap';
import "./Header.css"

function Header() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container fluid className='div-fluid'>
        <Navbar.Brand href="#home">
        <img
              src={ECFlogo}
              width="100%"
              height="80"
              className="d-inline-block align-top"
              alt="ECFlogo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
          <h1>Eternity Christian Fellowship</h1> 

          <Nav className="top-right-container">
            
            
            <NavDropdown title={<span className='dropdown-title'>Contact</span>} id="basic-nav-dropdown">
            
              <NavDropdown.Item href="#action/3.1">Phone: +1310-844-6948 (Google voice)</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Email: eternitychurch@gmx.com </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Mailing Address: P.O. Box 40, Rhoadesville, VA 22542
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
            <Button className='donate-btn' id='donatebtn'>
               <a href='https://www.paypal.com/donate?token=5XnJh_wHyiowCuoL_CCVr2f-XqgjtyX20Gx6-VvxcUGfYsl5dHuLItH9lztEBCwCZFp3eeJD9ku_7w5s'>Donate</a>
              </Button>
            </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;