import React from "react";
import "../components/Sass.scss";
import Links from "../components/Links";
import Profile from ".././assets/profile_three.png";
import { Col, Row, Button } from "react-bootstrap";

const TalentScreen = () => {
  return (
    <div>
      <Links />
      <div className="Talent_screen">
        <h1 className="Find">+ FIND TALENT</h1>
        <p className="Dream">Your dream candidate is just around the corner</p>
      </div>

      <div className="BackgroundVideo">
        <img src={Profile} alt="profile-img" className="Profile_image_one" />

        <Row>
          <Col>
            <p className="Talent_paragraph_one">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="Talent_paragraph_one">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </Col>
          <Col>
            <p className="Talent_paragraph_two">
              We can't wait to hear from you! Call us today and let us help you
              find what you're looking for.
            </p>
            <hr />
            <Button className="Btn btn-warning">CONTACT</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TalentScreen;
