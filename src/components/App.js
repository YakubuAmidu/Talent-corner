import React, { Component } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import profile_one from "../assets/profile_one.png";
import profile_two from "../assets/profile_two.png";
import profile_three from "../assets/profile_three.png";
import profile_four from "../assets/profile_four.png";
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
          <h1 className="About">+ ABOUT</h1>
          <p className="People">The people behind Creative Corner:</p>
          <Row>
            <Col className="Profile_box" xs={6} md={4}>
              <img
                src={profile_one}
                alt="profile-img"
                className="Profile_image"
              />
              <p className="Name_title">Name</p>
              <p className="Job_title">Job</p>
            </Col>
            <Col className="Profile_box" xs={6} md={4}>
              <img
                src={profile_two}
                alt="profile-img"
                className="Profile_image"
              />
              <p className="Name_title">Name</p>
              <p className="Job_title">Job</p>
            </Col>
            <Col className="Profile_box" xs={6}>
              <img
                src={profile_three}
                alt="profile-img"
                className="Profile_image"
              />
              <p className="Name_title">Name</p>
              <p className="Job_title">Job</p>
            </Col>
            <Col className="Profile_box" xs={6}>
              <img
                src={profile_four}
                alt="profile-img"
                className="Profile_image"
              />
              <p className="Name_title">Name</p>
              <p className="Job_title">Job</p>
            </Col>
          </Row>
          <Row>
            <Col className="Description_main" xs={12}>
              <p className="Description_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <p className="Description_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
