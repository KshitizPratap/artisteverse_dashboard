import { Link } from "react-router-dom";
import routes from "../../common/routes";
import classes from "./sideDrawer.module.scss";

const SideDrawer = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.routesContainer}>
        {routes.map((route) => {
          return <Link to={route.path}>{route.title}</Link>;
        })}
      </div>

      <button>Logout</button>
    </div>
  );
};

export default SideDrawer;
