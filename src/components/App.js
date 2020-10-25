import React, { Component } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
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
            <Col className="Description_main">
              <p className="Description_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col className="Description_main">
              <p className="Description_paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </div>

        <div className="Contact_section">
          <h1 className="About">+ ABOUT</h1>
          <p className="People">Over the phon or online</p>

          <div className="Contact_address">
            <Row>
              <Col className="Mail">
                <div className="Mail_one">
                  <p>Icon intfo@mysite.com</p>
                  <p>Icon 515-555-444</p>
                  <br />
                  <p>500 Terry Francois Street San Francisco, CA 94158</p>
                  <br />
                  <p>Map satelite</p>
                </div>
              </Col>
              <Col className="Message">
                <div className="Message_one">
                  <p>
                    If you're talented and looking for a job, contact us here.
                  </p>
                  <br />
                  <Form>
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control required type="text" placeholder="Name" />
                    <Form.Label>Enter Your Email</Form.Label>
                    <Form.Control required type="email" placeholder="Name" />
                    <Form.Label>Enter Your Phone</Form.Label>
                    <Form.Control required type="phone" placeholder="Name" />
                    <Form.Label>Enter Your Message</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
