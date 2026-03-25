import { Task } from "../../data/taskdata";
import TaskRow from "../task-management/taskrow.tsx";

interface TaskTableProps {
  tasks: Task[];
  onEdit: (id: number) => void;
}

export default function TaskTable({ tasks, onEdit }: TaskTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Room
            </th>
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Side
            </th>
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Day
            </th>
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Task
            </th>
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Rotation Month
            </th>
            <th className="text-right text-sm font-medium text-gray-500 px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="px-6 py-10 text-center text-sm text-gray-400"
              >
                No tasks found for the selected filters.
              </td>
            </tr>
          ) : (
            tasks.map((task, index) => (
              <TaskRow
                key={task.id}
                task={task}
                isLast={index === tasks.length - 1}
                onEdit={onEdit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
