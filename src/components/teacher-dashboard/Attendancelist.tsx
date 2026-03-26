import { useState } from "react";
import { FaSave } from "react-icons/fa";

type AttendanceStatus = "Present" | "Late" | "Absent" | null;

interface Student {
  id: number;
  name: string;
  serviceRole?: string;
}

interface AttendanceListProps {
  room: string;
  date: string;
  side: string;
  students: Student[];
  onSave: (records: Record<number, AttendanceStatus>) => void;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const statusStyles: Record<string, string> = {
  Present: "bg-green-500 text-white border-green-500",
  Late: "bg-yellow-400 text-white border-yellow-400",
  Absent: "bg-red-500 text-white border-red-500",
};

export default function AttendanceList({
  room,
  date,
  side,
  students,
  onSave,
}: AttendanceListProps) {
  const [records, setRecords] = useState<Record<number, AttendanceStatus>>({});

  const mark = (studentId: number, status: AttendanceStatus) => {
    setRecords((prev) => ({ ...prev, [studentId]: status }));
  };

  const present = Object.values(records).filter((s) => s === "Present").length;
  const late = Object.values(records).filter((s) => s === "Late").length;
  const absent = Object.values(records).filter((s) => s === "Absent").length;
  const notMarked = students.length - present - late - absent;

  return (
    <div className="flex flex-col gap-4">
      {/* Room Header Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-start justify-between mb-1">
          <h2 className="text-lg font-bold text-gray-900">
            Room {room} - Attendance
          </h2>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
            {side} Side
          </span>
        </div>
        <p className="text-sm text-gray-400">
          {students.length} students • {date}
        </p>

        <hr className="my-4 border-gray-100" />

        {/* Student Rows */}
        <div className="flex flex-col gap-3">
          {students.map((student) => (
            <div
              key={student.id}
              className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-4 py-3"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {getInitials(student.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {student.name}
                  </p>
                  {student.serviceRole && (
                    <p className="text-xs text-gray-400">
                      {student.serviceRole}
                    </p>
                  )}
                </div>
              </div>

              {/* Status Buttons */}
              <div className="flex items-center gap-2">
                {(["Present", "Late", "Absent"] as AttendanceStatus[]).map(
                  (status) => (
                    <button
                      key={status}
                      onClick={() => mark(student.id, status)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                        records[student.id] === status
                          ? statusStyles[status!]
                          : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {status}
                    </button>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance Summary Card */}
      <div className="bg-blue-50 rounded-2xl border border-blue-100 shadow-sm px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-gray-800 mb-2">
            Attendance Summary
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
              <span className="text-gray-600">Present: {present}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
              <span className="text-gray-600">Late: {late}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
              <span className="text-gray-600">Absent: {absent}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" />
              <span className="text-gray-600">Not marked: {notMarked}</span>
            </span>
          </div>
        </div>

        <button
          onClick={() => onSave(records)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm"
        >
          <FaSave className="text-sm" />
          Save Attendance
        </button>
      </div>
    </div>
  );
}
