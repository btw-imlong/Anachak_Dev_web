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
        <div className="mt-8">
          <h2 className="text-pink-500 font-semibold text-lg">
            Girls' Side (A & B Sections)
          </h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
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
            {/* Add more rooms */}
          </div>

          <h2 className="text-blue-500 font-semibold text-lg mt-6">
            Boys' Side (C & D Sections)
          </h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
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
            {/* Add more rooms */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
