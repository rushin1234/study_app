import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{fontFamily: "'Roboto Slab', serif"}}> MISSION SEM4 SYBCS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <Link to="/c1" className="nav-items">C1</Link>
            <Link to="/c2" className="nav-items">C2</Link>
            <Link to="/m1" className="nav-items">M1</Link>
            <Link to="/m2" className="nav-items">M2</Link>
            <Link to="/e1" className="nav-items">E1</Link>
            <Link to="/e2" className="nav-items">E2</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;