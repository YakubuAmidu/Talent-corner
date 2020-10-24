import React, { Component } from "react";
import "./Sass.scss";
import TopScreen from ".././screens/TopScreen";
import ImageScreen from ".././screens/ImageScreen";

class App extends Component {
  render() {
    return (
      <div>
        <TopScreen />
        <ImageScreen />
      </div>
    );
  }
}

export default App;
