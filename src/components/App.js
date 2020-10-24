import React, { Component } from "react";
import TopScreen from "../screens/TopScreen";
import ImageScreen from ".././screens/ImageScreen";
import "./Sass.scss";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <TopScreen />
          <ImageScreen />
        </div>
      </div>
    );
  }
}

export default App;
