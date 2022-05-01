import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";

const CustomRoutes = () => {
  let myRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return myRoutes;
};

export default CustomRoutes;
