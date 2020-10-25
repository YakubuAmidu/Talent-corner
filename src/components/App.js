import React, { Component } from "react";
import TopScreen from "../screens/TopScreen";
import background from ".././assets/background.png";
import { Col, Row, Button } from "react-bootstrap";
import "./Sass.scss";

class App extends Component {
  render() {
    return (
      <div className="App_header">
        <TopScreen />

        <div className="Background_image">
          <img
            className="Background_image-main"
            src={background}
            alt="background-img"
          />
          <div className="Background_title">
            <div>FRESH</div>
            <div>TALENT +</div>
            <div>TOP</div>
            <div>EMPLOYERS</div>
          </div>
          <div>create your future with us</div>
          <span className="Link_buttons">
            <Row>
              <Col>
                <Button className="btn btn-dark">FIND TALENT</Button>
                <Button className="btn btn-dark">FIND JOB</Button>
              </Col>
            </Row>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
