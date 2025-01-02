import Profile from "./profile/Profile";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.mainContainer}>
      <div>
        <img src="" alt="" />
        <h2>Heading</h2>
      </div>
      <Profile />
    </div>
  );
};

export default Header;
