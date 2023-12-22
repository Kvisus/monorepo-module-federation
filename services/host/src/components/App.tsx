import React from "react";
import { Link, Outlet } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";
import { adminRoutes } from "@packages/shared/src/routes/admin";

export const App = () => {
  return (
    <div data-testId="App.DataTestId">
      <h1>PAge</h1>
      <Link to={adminRoutes.about}>About</Link>
      <br />
      <Link to={shopRoutes.main}>Shop</Link>
      <Outlet />
    </div>
  );
};
