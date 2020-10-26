import React from "react";
import "../components/Sass.scss";
import Links from "../components/Links";
import Profile from ".././assets/profile_three.png";

const TalentScreen = () => {
  return (
    <div>
      <Links />
      <div className="Talent_screen">
        <h1 className="Find">+ FIND TALENT</h1>
        <p className="Dream">Your dream candidate is just around the corner</p>
      </div>

      <div className="BackgroundVideo">
        <img src={Profile} alt="profile-img" className="Profile_image_one" />
      </div>
    </div>
  );
};

export default TalentScreen;
