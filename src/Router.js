import React from "react";
import Home from "./container/Home/index";
import Login from "./container/Login/index";
import App from "./App";
export default [
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/",
        component: Home,
        loadData: Home.loadData,
        key: "home",
        exact: true,
      },
      {
        path: "/login",
        component: Login,
        exact: true,
        key: "login",
      },
    ],
  },
];
