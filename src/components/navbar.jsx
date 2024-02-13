import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{ fontFamily: "'Roboto Slab', serif" }} className="logo">BSC(cs)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navlist">
            <div className="list">
              <NavLink to="/sem3c1" className="nav-items">sem3 C1</NavLink>
              <NavLink to="/sem3c2" className="nav-items">sem3 C2</NavLink>
              <NavLink to="/sem3m1" className="nav-items">sem3 M1</NavLink>
              <NavLink to="/sem3m2" className="nav-items">sem3 M2</NavLink>
              <NavLink to="/sem3e1" className="nav-items">sem3 E1</NavLink>
              <NavLink to="/sem3e2" className="nav-items">sem3 E2</NavLink>
              <NavLink to="/sem3eng" className="nav-items">sem3 ENG</NavLink>
            </div>
            <div className="list">
              <NavLink to="/c1" className="nav-items">sem4 C1</NavLink>
              <NavLink to="/c2" className="nav-items">sem4 C2</NavLink>
              <NavLink to="/m1" className="nav-items">sem4 M1</NavLink>
              <NavLink to="/m2" className="nav-items">sem4 M2</NavLink>
              <NavLink to="/e1" className="nav-items">sem4 E1</NavLink>
              <NavLink to="/e2" className="nav-items">sem4 E2</NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;