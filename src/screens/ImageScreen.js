import React from "react";
import background_Image from ".././assets/background_Image.png";

const ImageScreen = () => {
  return (
    <div className="Background_header">
      <div className="Background">
        <img src={background_Image} alt="img" className="background-Image" />
        <p>FRESH</p>
        <p>TALENT +</p>
        <p>TOP</p>
        <p>EMPLOYERS</p>
      </div>
    </div>
  );
};

export default ImageScreen;
