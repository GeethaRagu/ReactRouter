import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/guvi">GUVI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/all">All</Nav.Link>
            <Nav.Link href="/fullstackdevelopment">FullStackDevelopment</Nav.Link>
            <Nav.Link href="/datascience">DataScience</Nav.Link>
            <Nav.Link href="/cybersecurity">CyberSecurity</Nav.Link>
            <Nav.Link href="/career">Career</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
