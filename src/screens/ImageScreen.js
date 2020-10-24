import React from "react";
import ".././components/Sass.scss";
import background_Image from ".././assets/background_Image.png";

const ImageScreen = () => {
  return (
    <div className="Background_header">
      <div className="Background">
        <img src={background_Image} alt="img" className="Background-Image" />
        <p className="Background_title">FRESH</p>
        <p className="Background_title">TALENT +</p>
        <p className="Background_title">TOP</p>
        <p className="Background_title">EMPLOYERS</p>
      </div>
    </div>
  );
};

export default ImageScreen;
