import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.tsx";
import Dashboard from "./pages/AdminDashBoard/Dashboard.tsx";

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
