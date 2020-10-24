import React, { Component } from "react";
import "./Sass.scss";
import TopScreen from ".././screens/TopScreen";
import ImageScreen from ".././screens/ImageScreen";
import GoldScreen from ".././screens/GoldScreen";

class App extends Component {
  render() {
    return (
      <div>
        <TopScreen />
        <ImageScreen />
        <GoldScreen />
      </div>
    );
  }
}

export default App;
