import React from "react";
import { Outlet } from "react-router";
import SideNav from "../components/SideNav";
import Profile from "../Pages/Profile";

const DashbordLayout = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen bg-gray-50">
      
      <aside className="col-span-12 md:col-span-3 bg-white shadow-md">
        <SideNav />
      </aside>

      <main className="col-span-12 md:col-span-9 p-6 overflow-y-auto">
       
        <Outlet />
      </main>

    </div>
  );
};

export default DashbordLayout;
