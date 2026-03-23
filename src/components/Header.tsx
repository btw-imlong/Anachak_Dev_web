// src/components/Header.tsx
import React from "react";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow sticky top-0 z-10">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-500 text-lg cursor-pointer" />
        <div className="text-right">
          <div className="font-medium">Admin User</div>
          <div className="text-sm text-gray-500">admin@school.edu</div>
        </div>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          AU
        </div>
      </div>
    </div>
  );
};

export default Header;
