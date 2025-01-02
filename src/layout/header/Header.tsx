import Profile from "./profile/Profile";
import Logo from "../../assets/logo.png";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.mainContainer}>
      <div>
        <img src={Logo} alt="" />
      </div>
      <Profile />
    </div>
  );
};

export default Header;
