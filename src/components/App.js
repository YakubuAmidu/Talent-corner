import React, { Component } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import profile_one from "../assets/profile_one.png";
import Links from "./Links";

class App extends Component {
  render() {
    return (
      <div>
        <Links />
        <div className="Background_image">
          <h1 className="Fresh">FRESH</h1>
          <h1 className="Talent">TALENT</h1>
          <h1 className="Top">TOP</h1>
          <h1 className="Employers">EMPLOYERS</h1>
          <p className="Create">create your future with us</p>
          <Row>
            <Col>
              <Button variant="outline-dark mr-4">FIND TALENT</Button>
              <Button variant="outline-dark">FIND JOB</Button>
            </Col>
          </Row>
        </div>

        <div className="Gold_background">
          <Row className="Logo_box">
            <Col className="Logo_box_one">
              <p className="Logo_image">Logo</p>
              <p className="Logo_description">GRAPHIC DESIGNERS</p>
            </Col>
            <Col className="Logo_box_one">
              <p className="Logo_image">Logo</p>
              <p className="Logo_description">COPYWRITERS</p>
            </Col>
            <Col className="Logo_box_one">
              <p className="Logo_image">Logo</p>
              <p className="Logo_description">CREATIVE DIRECTORS</p>
            </Col>
            <Col className="Logo_box_one">
              <p className="Logo_image">Logo</p>
              <p className="Logo_description">CLIENT MANAGERS</p>
            </Col>
          </Row>
        </div>

        <div className="About_section">
          <h1>+ ABOUT</h1>
          <p>The people behind Creative Corner:</p>
          <Row>
            <Col className="Profile_box">
              <img
                src={profile_one}
                alt="profile-img"
                className="Profile_image"
              />
            </Col>
            <Col className="Profile_box">
              <img
                src={profile_one}
                alt="profile-img"
                className="Profile_image"
              />
            </Col>
            <Col className="Profile_box">
              <img
                src={profile_one}
                alt="profile-img"
                className="Profile_image"
              />
            </Col>
            <Col className="Profile_box">
              <img
                src={profile_one}
                alt="profile-img"
                className="Profile_image"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
