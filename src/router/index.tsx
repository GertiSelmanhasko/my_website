import React from "react";
import { useRoutes } from "react-router-dom";

const Router = () =>
  useRoutes([
    {
      path: "/",
      element: <>hello world</>,
    },
  ]);
export default Router;
