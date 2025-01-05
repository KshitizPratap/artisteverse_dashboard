// import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
// import routes from "./common/routes";
import "./App.module.scss";

function App() {
  return (
    <Layout>
      {/* <Routes>
        {routes.map((route) => {
          return (
            <Route
              element={<route.component />}
              key={route.id}
              path={route.path}
            />
          );
        })}
      </Routes> */}
    </Layout>
  );
}

export default App;
