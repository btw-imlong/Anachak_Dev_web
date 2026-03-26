// src/pages/Dashboard/Dashboard.tsx
import React from "react";
import Header from "../../components/Header.tsx";
import Card from "../../components/Card.tsx";
import RoomCard from "../../components/teacher-dashboard/Roomcard.tsx";
import { assignedRoomsData } from "../../data/teacher/Assignedroomsdata.ts";
import { FaHome, FaUserGraduate, FaCheck } from "react-icons/fa";

const Dashboard = () => {
  const handleTakeAttendance = () => {
    console.log("Take attendance");
  };

  const handleViewDetails = (id: number) => {
    console.log("View details for room id:", id);
  };

  return (
    <div className="ml-64">
      <Header />
      <div className="pl-4">
        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Card
            title="Total Rooms"
            value={48}
            subtitle="24 Girls • 24 Boys"
            icon={<FaHome className="text-blue-500 text-xl" />}
            bgColor="bg-blue-100"
          />
          <Card
            title="Total Students"
            value={40}
            subtitle="20 Girls • 20 Boys"
            icon={<FaUserGraduate className="text-green-500 text-xl" />}
            bgColor="bg-green-100"
          />
          <Card
            title="Attendance Today"
            value="63%"
            subtitle="25 present"
            icon={<FaCheck className="text-orange-500 text-xl" />}
            bgColor="bg-orange-100"
          />
        </div>

        {/* My Assigned Rooms Section */}
        <div className="mt-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                My Assigned Rooms
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                Rooms under your supervision
              </p>
            </div>
            <button
              onClick={handleTakeAttendance}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm"
            >
              Take Attendance
            </button>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {assignedRoomsData.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>

        {/* Management Cards Section */}
        <div className="flex-2 mb-8">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 text-lg mb-4">
                User Management
              </h3>
              <p className="text-gray-500 text-sm">
                Create and manage teacher & student accounts
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 text-lg mb-4">
                Service Management
              </h3>
              <p className="text-gray-500 text-sm">
                Assign and manage student service duties
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 text-lg mb-4">
                Task Management
              </h3>
              <p className="text-gray-500 text-sm">
                Manage weekly tasks and rotation schedules
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
