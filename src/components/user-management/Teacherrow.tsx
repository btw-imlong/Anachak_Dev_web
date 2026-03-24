import { FaEdit, FaTrash } from "react-icons/fa";
import RoomBadge from "../../components/user-management/Roombadge.tsx";

export interface Teacher {
  id: number;
  name: string;
  email: string;
  rooms: string[];
  students: number;
}

interface TeacherRowProps {
  teacher: Teacher;
  isLast: boolean;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TeacherRow({
  teacher,
  isLast,
  onEdit,
  onDelete,
}: TeacherRowProps) {
  return (
    <tr
      className={`hover:bg-gray-50 transition-colors ${!isLast ? "border-b border-gray-50" : ""}`}
    >
      <td className="px-6 py-4 text-sm font-semibold text-gray-800">
        {teacher.name}
      </td>
      <td className="px-6 py-4 text-sm text-gray-400">{teacher.email}</td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1.5">
          {teacher.rooms.map((room) => (
            <RoomBadge key={room} room={room} />
          ))}
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-700">{teacher.students}</td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => onEdit(teacher.id)}
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <FaEdit className="text-base" />
          </button>
          <button
            onClick={() => onDelete(teacher.id)}
            className="text-red-300 hover:text-red-500 transition-colors"
          >
            <FaTrash className="text-base" />
          </button>
        </div>
      </td>
    </tr>
  );
}
