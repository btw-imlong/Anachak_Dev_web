import { FaEdit } from "react-icons/fa";
import { Task } from "../../data/taskdata";

interface TaskRowProps {
  task: Task;
  isLast: boolean;
  onEdit: (id: number) => void;
}

export default function TaskRow({ task, isLast, onEdit }: TaskRowProps) {
  return (
    <tr
      className={`hover:bg-gray-50 transition-colors ${!isLast ? "border-b border-gray-50" : ""}`}
    >
      {/* Room */}
      <td className="px-6 py-4 text-sm font-semibold text-gray-800">
        {task.room}
      </td>

      {/* Side */}
      <td className="px-6 py-4">
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
          {task.side}
        </span>
      </td>

      {/* Day */}
      <td className="px-6 py-4">
        <span className="px-3 py-1 border border-gray-200 text-gray-600 text-xs rounded-lg font-medium">
          {task.day}
        </span>
      </td>

      {/* Task */}
      <td className="px-6 py-4 text-sm text-gray-700">{task.task}</td>

      {/* Rotation Month */}
      <td className="px-6 py-4">
        <span className="px-3 py-1 bg-blue-50 text-blue-500 text-xs rounded-full font-medium">
          {task.rotationMonth}
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex justify-end">
          <button
            onClick={() => onEdit(task.id)}
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <FaEdit className="text-base" />
          </button>
        </div>
      </td>
    </tr>
  );
}
