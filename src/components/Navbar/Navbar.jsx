import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/aba/logo-aba.png'

const styleNav = {
  textAlign: 'center'
};


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Aba logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={styleNav}>
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#home">Historia</Nav.Link>
            <Nav.Link href="#home">Catalago</Nav.Link>
            <Nav.Link href="#home">Puntos de Venta</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;