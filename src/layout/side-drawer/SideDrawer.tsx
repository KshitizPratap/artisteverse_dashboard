import { NavLink } from "react-router-dom";
import routes from "../../common/routes";
import { globalStore } from "../../store/globalStore";
import classes from "./sideDrawer.module.scss";

const SideDrawer = () => {
  const { setIsAuth } = globalStore();

  const logoutHandler = () => {
    setIsAuth(false);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.routesContainer}>
        {routes.map((route) => {
          return (
            <NavLink
              to={route.path}
              className={({ isActive }) => (isActive ? classes.active : "")}
              key={route.path}
            >
              {route.title}
            </NavLink>
          );
        })}
      </div>

      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default SideDrawer;
