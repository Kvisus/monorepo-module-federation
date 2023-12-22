import React from "react";
import { Link, Outlet } from "react-router-dom";
import { deepMerge } from "@packages/shared/src/utils/deepMerge";
import UserCard from "@packages/shared/src/components/Usercard";
export const App = () => {
  deepMerge();
  return (
    <div>
      <h1>Admin Module</h1>

      <Outlet />
      <UserCard userName="from admin" />
    </div>
  );
};
