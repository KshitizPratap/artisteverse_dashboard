import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import SideDrawer from "./side-drawer/SideDrawer";
import classes from "./layout.module.scss";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={classes.contentWrapper}>
        <SideDrawer />
        <div className={classes.childContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
