import React from "react";
import { Link, Outlet } from "react-router-dom";
export const App = () => {
  return (
    <div>
      <h1>SHOP Module</h1>
      <Outlet />
    </div>
  );
};
