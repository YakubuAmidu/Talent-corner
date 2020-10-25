import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
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
              <Button variant="outline-dark">FIND TALENT</Button>
              <Button variant="outline-dark">FIND JOB</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
