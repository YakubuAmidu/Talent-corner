import React from "react";
import Links from ".././components/Links";
import VideoOne from "../assets/VideoOne.mp4";

const TalentScreen = () => {
  return (
    <div>
      <Links />
      <div className="Talent_screen">
        <h1 className="Find">+ FIND TALENT</h1>
        <p className="Dream">Your dream candidate is just around the corner</p>
      </div>
      <video src={VideoOne} autoPlay="true" className="Background_video" />
    </div>
  );
};

export default TalentScreen;
