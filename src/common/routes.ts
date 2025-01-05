import React from "react";
import Overview from "../pages/overview/Overview";
import Stats from "../pages/stats/Stats";
import User from "../pages/user/User";
import Sales from "../pages/sales/Sales";
import Karaoke from "../pages/karaoke/Karaoke";

type Route = {
  id: string;
  title: string;
  path: string;
  component: React.ComponentType;
};

const routes: Array<Route> = [
  {
    id: "overview",
    title: "Overview",
    path: "/",
    component: Overview,
  },
  {
    id: "stats",
    title: "Stats",
    path: "/stats",
    component: Stats,
  },
  {
    id: "user",
    title: "User",
    path: "/user",
    component: User,
  },
  {
    id: "sales",
    title: "Sales",
    path: "/sales",
    component: Sales,
  },
  {
    id: "karaoke",
    title: "Karaoke",
    path: "/karaoke",
    component: Karaoke,
  },
];

export default routes;
