import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Body;
