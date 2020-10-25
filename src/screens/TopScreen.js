import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const TopScreen = () => {
  return (
    <div className="Navbar">
      <Navbar bg="primary" expand="md">
        <Navbar.Brand href="#home">
          <strong>Talent</strong> Corner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Find Talent</Nav.Link>
            <Nav.Link href="#home">Find Job</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopScreen;
