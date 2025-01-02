import React from "react";
import Overview from "../pages/overview/overview";
import Stats from "../pages/stats/stats";
import User from "../pages/user/user";
import Sales from "../pages/sales/sales";
import Karaoke from "../pages/karaoke/karaoke";

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
