import ProfilePic from "../../../assets/profile.jpg";
import ProfileMenu from "../../../common/components/profile-menu/ProfileMenu";
import { globalStore } from "../../../store/globalStore";
import classes from "./profile.module.scss";

const Profile = () => {
  const { setIsProfileMenuOpen, isProfileMenuOpen } = globalStore();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.profileName}>
        <span>Welcome,</span>
        <span>{"user-name"}</span>
      </div>
      <img
        src={ProfilePic}
        alt=""
        className={classes.profilePic}
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
      />
      <ProfileMenu />
    </div>
  );
};

export default Profile;
