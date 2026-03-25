// src/pages/Dashboard/Dashboard.tsx
import React from "react";
import Header from "../../components/Header.tsx";
import Card from "../../components/Card.tsx";
import RoomCard from "../../components/RoomCard.tsx";
import { FaHome, FaUserGraduate, FaUserTie, FaCheck } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="ml-64 ">
      <Header />
      <div className="pl-4">
        <div className="grid grid-cols-4 gap-4 mt-6">
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
            title="Total Teachers"
            value={10}
            subtitle="Supervising all rooms"
            icon={<FaUserTie className="text-purple-500 text-xl" />}
            bgColor="bg-purple-100"
          />
          <Card
            title="Attendance Today"
            value="63%"
            subtitle="25 present"
            icon={<FaCheck className="text-orange-500 text-xl" />}
            bgColor="bg-orange-100"
          />
        </div>

        {/* Rooms Section */}
        <div className="flex-2 mb-8">
          <div className="mt-8 flex gap-12">
            {/* Girls' Section */}
            <div className="flex-1">
              <h2 className="text-pink-500 font-semibold text-xl">
                Girls' Side (A & B Sections)
              </h2>
              <p className="text-gray-500 text-sm mt-1">24 rooms</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <RoomCard
                  roomName="A1"
                  teacher="Ms. Sarah Johnson"
                  studentsCount={2}
                  color="bg-pink-100 text-pink-700"
                />
                <RoomCard
                  roomName="A2"
                  teacher="Ms. Sarah Johnson"
                  studentsCount={2}
                  color="bg-pink-100 text-pink-700"
                />
                <RoomCard
                  roomName="A3"
                  teacher="Ms. Sarah Johnson"
                  studentsCount={2}
                  color="bg-pink-100 text-pink-700"
                />
                <RoomCard
                  roomName="A4"
                  teacher="Ms. Sarah Johnson"
                  studentsCount={2}
                  color="bg-pink-100 text-pink-700"
                />
                <RoomCard
                  roomName="A5"
                  teacher="Ms. Sarah Johnson"
                  studentsCount={2}
                  color="bg-pink-100 text-pink-700"
                />
                <RoomCard
                  roomName="A6"
                  teacher="Ms. Sarah Johnson"
                  studentsCount={2}
                  color="bg-pink-100 text-pink-700"
                />
                <RoomCard
                  roomName="A7"
                  teacher="Ms. Sarah Johnson"
                  studentsCount={2}
                  color="bg-pink-100 text-pink-700"
                />
                <RoomCard
                  roomName="A8"
                  teacher="Ms. Sarah Johnson"
                  studentsCount={2}
                  color="bg-pink-100 text-pink-700"
                />
                <RoomCard
                  roomName="A9"
                  teacher="Ms. Sarah Johnson"
                  studentsCount={2}
                  color="bg-pink-100 text-pink-700"
                />
                <RoomCard
                  roomName="A10"
                  teacher="Ms. Sarah Johnson"
                  studentsCount={2}
                  color="bg-pink-100 text-pink-700"
                />
                {/* Add more rooms */}
              </div>
            </div>
            {/* Boys' Section */}
            <div className="flex-1">
              <h2 className="text-blue-500 font-semibold text-xl">
                Boys' Side (C & D Sections)
              </h2>
              <p className="text-gray-500 text-sm mt-1">24 rooms</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <RoomCard
                  roomName="C1"
                  teacher="Mr. James Smith"
                  studentsCount={2}
                  color="bg-blue-100 text-blue-700"
                />
                <RoomCard
                  roomName="C2"
                  teacher="Mr. James Smith"
                  studentsCount={2}
                  color="bg-blue-100 text-blue-700"
                />
                <RoomCard
                  roomName="C3"
                  teacher="Mr. James Smith"
                  studentsCount={2}
                  color="bg-blue-100 text-blue-700"
                />
                <RoomCard
                  roomName="C4"
                  teacher="Mr. James Smith"
                  studentsCount={2}
                  color="bg-blue-100 text-blue-700"
                />
                <RoomCard
                  roomName="C5"
                  teacher="Mr. James Smith"
                  studentsCount={2}
                  color="bg-blue-100 text-blue-700"
                />
                <RoomCard
                  roomName="C6"
                  teacher="Mr. James Smith"
                  studentsCount={2}
                  color="bg-blue-100 text-blue-700"
                />
                <RoomCard
                  roomName="C7"
                  teacher="Mr. James Smith"
                  studentsCount={2}
                  color="bg-blue-100 text-blue-700"
                />
                <RoomCard
                  roomName="C8"
                  teacher="Mr. James Smith"
                  studentsCount={2}
                  color="bg-blue-100 text-blue-700"
                />
                <RoomCard
                  roomName="C9"
                  teacher="Mr. James Smith"
                  studentsCount={2}
                  color="bg-blue-100 text-blue-700"
                />
                <RoomCard
                  roomName="C10"
                  teacher="Mr. James Smith"
                  studentsCount={2}
                  color="bg-blue-100 text-blue-700"
                />
                {/* Add more rooms */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-8 mt-8">
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
