import { FaChevronDown, FaCalendarAlt } from "react-icons/fa";

const rooms = ["A1", "A2", "A3", "A4", "A5"];

interface AttendanceSelectorProps {
  date: string;
  selectedRoom: string;
  helpMode: boolean;
  onDateChange: (date: string) => void;
  onRoomChange: (room: string) => void;
  onHelpModeToggle: () => void;
}

export default function AttendanceSelector({
  date,
  selectedRoom,
  helpMode,
  onDateChange,
  onRoomChange,
  onHelpModeToggle,
}: AttendanceSelectorProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Take Attendance</h2>
          <p className="text-sm text-gray-400 mt-1">
            Mark student attendance for the selected date
          </p>
        </div>

        {/* Help Mode Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">?</span>
          <span className="text-sm text-gray-600">Help Mode (Substitute)</span>
          <button
            onClick={onHelpModeToggle}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              helpMode ? "bg-green-500" : "bg-gray-200"
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                helpMode ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Date + Room selectors */}
      <div className="grid grid-cols-2 gap-6">
        {/* Select Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Date
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
            <input
              type="date"
              value={date}
              onChange={(e) => onDateChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-gray-300 transition"
            />
          </div>
        </div>

        {/* Select Room */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Room
          </label>
          <div className="relative">
            <select
              value={selectedRoom}
              onChange={(e) => onRoomChange(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 bg-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-gray-300 transition cursor-pointer"
              style={{ color: selectedRoom ? "#374151" : "#9ca3af" }}
            >
              <option value="">Choose a room</option>
              {rooms.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
