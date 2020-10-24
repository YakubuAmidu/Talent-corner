import React from "react";
import ".././components/Sass.scss";
import { Button } from "react-bootstrap";
import background_Image from ".././assets/background_Image.png";

const ImageScreen = () => {
  return (
    <div className="Background_header">
      <img src={background_Image} alt="img" className="Background-Image" />
      <div className="Background">
        <p className="Background_title">FRESH</p>
        <p className="Background_title">TALENT +</p>
        <p className="Background_title">TOP</p>
        <p className="Background_title">EMPLOYERS</p>
        <p className="Background_message">create your future with us</p>
        <Button className="Btn_header danger">FIND TALENT</Button>
        <Button className="Btn_header danger">FIND JOB</Button>
      </div>
    </div>
  );
};

export default ImageScreen;
