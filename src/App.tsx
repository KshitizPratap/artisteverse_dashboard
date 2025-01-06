import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./common/routes";
import "./App.module.scss";
import { globalStore } from "./store/globalStore";
import Login from "./pages/login/Login";
import { useEffect } from "react";

function App() {
  const { isAuth } = globalStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth && pathname !== "/login") {
      navigate("/login");
    }
  }, [pathname, isAuth, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {isAuth && (
        <Route path="/" element={<Layout />}>
          {routes.map((route) => (
            <Route
              element={<route.component />}
              key={route.id}
              path={route.path}
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}

      {!isAuth && <Route path="*" element={<Navigate to="/login" />} />}
    </Routes>
  );
}

export default App;
