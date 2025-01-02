import React from "react";
import ProfilePic from "../../../assets/profile.jpg";
import classes from "./profile.module.scss";

const Profile = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.profileName}>
        <span>Welcome,</span>
        <span>{"user-name"}</span>
      </div>
      <img src={ProfilePic} alt="" />
    </div>
  );
};

export default Profile;
