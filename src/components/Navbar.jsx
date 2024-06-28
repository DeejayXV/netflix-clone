import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/Netflix_2015_logo.svg";
import profile from "../assets/My Photo.jpeg";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
        <img src={logo} alt="logo" width="100" height="55" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <Nav>
            
            <Nav.Link href="#"> <img src={profile} alt="profile" width="40" height="40" /> </Nav.Link>
            {/* <Nav.Link href="#" className="fw-bold" id="kids">
              KIDS
            </Nav.Link> */}
            {/* <Nav.Link href="#">
              <i className="bi bi-search icons"></i>
            </Nav.Link> */}
            {/* <Nav.Link href="#">
              <i className="bi bi-bell icons"></i>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
