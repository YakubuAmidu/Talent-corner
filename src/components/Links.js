import React, { Component } from "react";
import "./Sass.scss";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class Links extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar bg="dark" expand="md">
          <Navbar.Brand href="#home">
            <strong className="Talent_one">Talent</strong> Corner
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/" className="Links_one">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/" className="Links_one">
                  Find Talent
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="#" className="Links_one">
                  Find Job
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="#" className="Links_one">
                  Link
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Links;
