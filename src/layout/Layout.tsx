import { ReactNode } from "react";
import Header from "./header/Header";
import SideDrawer from "./side-drawer/SideDrawer";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div>
        <SideDrawer />
        {children}
      </div>
    </div>
  );
};

export default Layout;
