import { NavLink } from "react-router-dom";
import Profile from "./profile/Profile";
import Logo from "../../assets/logo.png";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.mainContainer}>
      <NavLink to="/">
        <img className={classes.logo} src={Logo} alt="" />
      </NavLink>
      <Profile />
    </div>
  );
};

export default Header;
