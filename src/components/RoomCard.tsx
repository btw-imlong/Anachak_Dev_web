// src/components/RoomCard.tsx
import React from "react";

interface RoomCardProps {
  roomName: string;
  teacher: string;
  studentsCount: number;
  color?: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  roomName,
  teacher,
  studentsCount,
  color,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
      <div>
        <div className="font-semibold">{roomName}</div>
        <div className="text-gray-500 text-sm">{teacher}</div>
      </div>
      <div
        className={`text-sm font-medium px-2 py-1 rounded ${color || "bg-gray-100"}`}
      >
        {studentsCount} students
      </div>
    </div>
  );
};

export default RoomCard;
