// src/components/Sidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaBox, FaTasks, FaCog, FaTh } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md fixed top-0 left-0 flex flex-col justify-between">
      <div>
        <div className="p-6 font-bold text-xl border-b">Admin Portal</div>
        <nav className="mt-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-4 hover:bg-gray-100 ${isActive ? "bg-gray-100 font-semibold" : ""}`
            }
          >
            <FaTh className="mr-3" /> Dashboard
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center p-4 hover:bg-gray-100 ${isActive ? "bg-gray-100 font-semibold" : ""}`
            }
          >
            <FaUser className="mr-3" /> User Management
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `flex items-center p-4 hover:bg-gray-100 ${isActive ? "bg-gray-100 font-semibold" : ""}`
            }
          >
            <FaBox className="mr-3" /> Service Management
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `flex items-center p-4 hover:bg-gray-100 ${isActive ? "bg-gray-100 font-semibold" : ""}`
            }
          >
            <FaTasks className="mr-3" /> Task Management
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center p-4 hover:bg-gray-100 ${isActive ? "bg-gray-100 font-semibold" : ""}`
            }
          >
            <FaCog className="mr-3" /> Settings
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
