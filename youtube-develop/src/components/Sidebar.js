import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return !isMenuOpen ? null : (
    <div className=" shadow-lg flex flex-col w-32">
      <div className="flex flex-col pb-5">
        <h1 className=" font-bold pb-1 pt-3">
          <Link to="/"> Home</Link>
        </h1>
        <ul>
          <li className=" font-normal">Shorts</li>
          <li className=" font-normal">Subscriptions</li>
          <li className=" font-normal">Youtube Music</li>
        </ul>
      </div>
      <div className="flex flex-col pb-5">
        <h1 className=" font-bold pb-1">You</h1>
        <ul>
          <li className=" font-normal">Your channel</li>
          <li className=" font-normal">History</li>
          <li className=" font-normal">Your videos</li>
          <li className=" font-normal">Watch later</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
