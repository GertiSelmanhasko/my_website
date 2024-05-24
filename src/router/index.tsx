import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import MainPage from "../pages/MainPage";

const Router = () =>
  useRoutes([
    {
      path: "/",
      element: (
        <MainLayout>
          <MainPage />
        </MainLayout>
      ),
    },
    {
      path: "/Games",
      element: (
        <MainLayout>
          <>Games</>
        </MainLayout>
      ),
    },
    {
      path: "/AboutMe",
      element: (
        <MainLayout>
          <>About Me</>
        </MainLayout>
      ),
    },
  ]);
export default Router;
