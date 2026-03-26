import { DayTask } from "../../data/teacher/Weeklyscheduledata.ts";

interface RoomScheduleCardProps {
  room: string;
  side: "Girls" | "Boys";
  tasks: DayTask[];
}

export default function RoomScheduleCard({
  room,
  side,
  tasks,
}: RoomScheduleCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
      {/* Card Header */}
      <div className="flex items-start justify-between px-6 py-4 border-b border-gray-100">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Room {room}</h2>
          <p className="text-sm text-gray-400 mt-0.5">Weekly task schedule</p>
        </div>
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
          {side} Side
        </span>
      </div>

      {/* Task Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left text-sm font-semibold text-gray-700 px-6 py-3">
              Day
            </th>
            <th className="text-left text-sm font-semibold text-gray-700 px-6 py-3">
              Task
            </th>
            <th className="text-left text-sm font-semibold text-gray-700 px-6 py-3">
              Rotation Month
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item, index) => (
            <tr
              key={item.day}
              className={`${index !== tasks.length - 1 ? "border-b border-gray-50" : ""} hover:bg-gray-50 transition-colors`}
            >
              <td className="px-6 py-3">
                <span className="px-3 py-1 border border-gray-200 text-gray-600 text-xs rounded-lg font-medium">
                  {item.day}
                </span>
              </td>
              <td className="px-6 py-3 text-sm text-gray-700">{item.task}</td>
              <td className="px-6 py-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-500 text-xs rounded-full font-medium">
                  {item.rotationMonth}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
