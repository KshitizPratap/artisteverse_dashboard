import { ReactNode } from "react";
import Header from "./header/Header";
import SideDrawer from "./side-drawer/SideDrawer";
import classes from "./layout.module.scss";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className={classes.contentWrapper}>
        <SideDrawer />
        <div className={classes.childContainer}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
