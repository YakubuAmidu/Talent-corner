import React from "react";
import profile from "../assets/typing.png";
import Links from ".././components/Links";
import sponsor_one from ".././assets/sponsor_one.png";
import sponsor_two from ".././assets/sponsor_two.png";
import sponsor_three from ".././assets/sponsor_three.png";
import sponsor_four from ".././assets/sponsor_four.png";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobScreen = () => {
  return (
    <div className="Job_screen">
      <Links />
      <div className="Job_titles">
        <h1 className="Job_message_one">+ FIND A JOB</h1>
        <p className="Job_message_two">Put your passion to work</p>
      </div>

      <div className="Job_image">
        <img src={profile} alt="img" className="Job_image_one" />

        <Row>
          <Col className="Talent_header_one" sm={12}>
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
            <Link to="/">
              <Button className="btn btn-warning Btn_warning">APPLY NOW</Button>
            </Link>
          </Col>
        </Row>
      </div>

      <div className="Sponsors_screen">
        <p className="Sponsor_message">
          Our clients are out partners, that's why we choose them carefully:
        </p>

        <Row className="Sponsors_logos">
          <Col className="Icon_logos">
            <img src={sponsor_one} alt="img" className="Sponsor_image" />
          </Col>
          <Col className="Icon_logos">
            <img src={sponsor_two} alt="img" className="Sponsor_image" />
          </Col>
          <Col className="Icon_logos">
            <img src={sponsor_three} alt="img" className="Sponsor_image" />
          </Col>
          <Col className="Icon_logos">
            <img src={sponsor_four} alt="img" className="Sponsor_image" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default JobScreen;
