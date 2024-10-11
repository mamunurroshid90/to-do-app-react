import React from "react";
import Navbar from "../../components/menubar";
import { Outlet } from "react-router-dom";

const RouteLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RouteLayout;
