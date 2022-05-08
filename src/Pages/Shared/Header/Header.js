import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";



const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
      signOut(auth);
  }
  return (
    <div>


      <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src="https://i.ibb.co/vQxMd27/bookstore-flat-bookshop-vector-28078400.jpg" height="30px" alt="" />Bookstore</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/blog">Blogs</Nav.Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                <NavDropdown.Item href="/addservice">Add Service</NavDropdown.Item>
                <NavDropdown.Item href="/manageservice">ManageService</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/myitems">MyItems</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              {
                user && <>
                  <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                  <Nav.Link as={Link} to="manageservice">Manage</Nav.Link>
                </>
              }
              {
                user ?
                  <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                  :
                  <Nav.Link as={Link} to="login">
                    Login
                  </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
};

export default Header;
