import React from "react";
import "../style/dashboard.css";
import Sidebar from "../components/dashboard/Sidebar";
import HeaderAdmin from "../components/dashboard/HeaderAdmin";
import UserAdmin from "../components/dashboard/UserAdmin";
import UserTabs from "../components/dashboard/UserTabs";
import WelCome from "./WelCome";
import { useDashboardHook } from "../hooks/auth/DashboardHook";

//import { Outlet } from "react-router-dom";

const DashBoard = () => {
  useDashboardHook();
  return (
    <div className="dashboard_section">
      <Sidebar />
      <main>
        <HeaderAdmin />
        <UserAdmin />
        {/* main content*/}
        <div className="wrapper">
          <UserTabs />
          <div className="container">
            <WelCome />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
