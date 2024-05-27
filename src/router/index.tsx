import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import MainPage from "../pages/MainPage/MainPage";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";

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
      path: "/Portfolio",
      element: (
        <MainLayout>
          <PortfolioPage />
        </MainLayout>
      ),
    },
  ]);
export default Router;
