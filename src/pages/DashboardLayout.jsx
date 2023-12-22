// DashboardLayout.js

import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import "../css/dashboardlayout.css";

const DashboardLayout = () => {
  return (
    <main className="dashboard">
      <Navbar />
      <div className="dashboard=page"></div>
      <Outlet />
    </main>
  );
};

export default DashboardLayout;
