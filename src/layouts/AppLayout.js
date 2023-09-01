import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from "../components/Navigation/MainSidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default AppLayout;