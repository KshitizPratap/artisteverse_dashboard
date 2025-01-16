import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { globalStore } from "../../../store/globalStore";
import classes from "./profileMenu.module.scss";

const ProfileMenu = () => {
  const { setIsAuth, isProfileMenuOpen, setIsProfileMenuOpen } = globalStore();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsProfileMenuOpen(false);
    }
  };

  const logoutHandler = () => {
    setIsAuth(false);
  };

  return (
    isProfileMenuOpen && (
      <div className={classes.menuColorWrwapper} ref={menuRef}>
        <div className={classes.mainContainer}>
          {routes.map((route) => {
            return (
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? classes.active : "")}
                key={route.path}
                onClick={() => setIsProfileMenuOpen(false)}
              >
                {route.title}
              </NavLink>
            );
          })}
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
    )
  );
};

export default ProfileMenu;
