import Profile from "./profile/Profile";
import Logo from "../../assets/logo.png";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.mainContainer}>
      <img className={classes.logo} src={Logo} alt="" />
      <Profile />
    </div>
  );
};

export default Header;
