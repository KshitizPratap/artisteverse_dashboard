// import { NavLink } from "react-router-dom";
// import routes from "../../common/routes";
import classes from "./sideDrawer.module.scss";

const SideDrawer = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.routesContainer}>
        {/* {routes.map((route) => {
          return (
            <NavLink
              to={route.path}
              className={({ isActive }) => (isActive ? classes.active : "")}
              key={route.path}
            >
              {route.title}
            </NavLink>
          );
        })} */}
      </div>

      <button>Logout</button>
    </div>
  );
};

export default SideDrawer;
