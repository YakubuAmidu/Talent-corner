import React, { Component } from "react";
import "./Sass.scss";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

class Links extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar bg="dark" expand="md">
          <Navbar.Brand href="#home">
            <strong className="Talent_one">TALENT</strong> CORNER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/" className="Links_one">
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/TalentScreen" className="Links_one">
                  FIND TALENT
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/JobScreen" className="Links_one">
                  FIND JOB
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="#" className="Links_one">
                  <FaFacebookF />
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="#" className="Links_one">
                  <FaTwitter />
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="#" className="Links_one">
                  <FaInstagram />
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
