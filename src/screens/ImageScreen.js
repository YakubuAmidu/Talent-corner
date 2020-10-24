import React from "react";
import ".././components/Sass.scss";
import Background from "../assets/background.png";

const ImageScreen = () => {
  return (
    <div className="App_image">
      <div>
        <img
          className="Background_image"
          src={Background}
          alt="background-img"
        />
      </div>
    </div>
  );
};

export default ImageScreen;
