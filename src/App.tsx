import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.tsx";
import Dashboard from "./pages/AdminDashBoard/Dashboard.tsx";
import UserManagement from "./pages/AdminDashBoard/User-management.tsx";
import ServiceManagement from "./pages/AdminDashBoard/Service-management.tsx";
import TaskManagement from "./pages/AdminDashBoard/Task-management.tsx";
function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar always visible */}
        <Sidebar />

        {/* Page content */}
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/services" element={<ServiceManagement />} />
            <Route path="/tasks" element={<TaskManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
