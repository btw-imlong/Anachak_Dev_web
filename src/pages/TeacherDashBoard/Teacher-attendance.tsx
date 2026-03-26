import { useState } from "react";
import AttendanceSelector from "../../components/teacher-dashboard/Attendanceselector.tsx";
import AttendanceEmpty from "../../components/teacher-dashboard/Attendanceempty.tsx";
import AttendanceList from "../../components/teacher-dashboard/Attendancelist.tsx";
import {
  roomStudents,
  AttendanceStatus,
} from "../../data/teacher/Roomstudentsdata.ts";
import Header from "../../components/Header.tsx";

export default function TakeAttendance() {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [helpMode, setHelpMode] = useState(false);

  const students = roomStudents[selectedRoom] ?? [];
  const side = students[0]?.side ?? "Girls";

  const handleSave = (records: Record<number, AttendanceStatus>) => {
    console.log("Saving attendance for room", selectedRoom, records);
    // TODO: connect to your API
  };

  return (
    <div className="ml-64">
      <Header />
      <div className="min-h-screen bg-gray-50 p-8 font-sans">
        {/* Attendance Selector */}
        <AttendanceSelector
          date={date}
          selectedRoom={selectedRoom}
          helpMode={helpMode}
          onDateChange={setDate}
          onRoomChange={setSelectedRoom}
          onHelpModeToggle={() => setHelpMode((prev) => !prev)}
        />

        {/* Empty state or attendance list */}
        {!selectedRoom ? (
          <AttendanceEmpty />
        ) : (
          <AttendanceList
            room={selectedRoom}
            date={date}
            side={side}
            students={students}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
}
