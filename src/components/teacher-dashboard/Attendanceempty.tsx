import { FaCalendarAlt } from "react-icons/fa";

export default function AttendanceEmpty() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 flex flex-col items-center justify-center gap-4">
      <FaCalendarAlt className="text-5xl text-gray-200" />
      <p className="text-gray-400 text-sm">
        Select a room to start taking attendance
      </p>
    </div>
  );
}
