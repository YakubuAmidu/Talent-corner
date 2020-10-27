import React from "react";
import "../components/Sass.scss";
import Links from "../components/Links";
import Talentcorner from ".././assets/Talentcorner.mp4";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TalentScreen = () => {
  return (
    <div>
      <Links />
      <div className="Talent_section">
        <h1 className="Header_title_three">+ FIND TALENT</h1>
        <p className="Header_description_one">
          Your dream candidate is just around the corner
        </p>
      </div>

      <div className="Background_video" autoPlay loop muted>
        <video
          src={Talentcorner}
          controls
          autoPlay
          loop
          muted
          type="video/mp4"
          className="Background_video_one"
        />
        <Row>
          <Col className="Talent_header_one" md={6}>
            <p className="Talent_paragraph_one">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="Talent_paragraph_two">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </Col>
          <Col className="Talent_header_two">
            <p className="Talent_paragraph_three">
              We can't wait to hear from you! Call us today and let us help you
              find what you're looking for.
            </p>
            <hr />
            <Link to="/Contact_section">
              <Button className="btn btn-warning Btn_warning">CONTACT</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TalentScreen;
