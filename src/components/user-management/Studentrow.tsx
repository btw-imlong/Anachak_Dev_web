import { FaEdit, FaTrash } from "react-icons/fa";

export interface Student {
  id: number;
  name: string;
  room: string;
  side: "Girls" | "Boys";
  serviceRole: string | null;
}

interface StudentRowProps {
  student: Student;
  isLast: boolean;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function StudentRow({
  student,
  isLast,
  onEdit,
  onDelete,
}: StudentRowProps) {
  return (
    <tr
      className={`hover:bg-gray-50 transition-colors ${!isLast ? "border-b border-gray-50" : ""}`}
    >
      {/* Name */}
      <td className="px-6 py-4 text-sm font-semibold text-gray-800">
        {student.name}
      </td>

      {/* Room */}
      <td className="px-6 py-4">
        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
          {student.room}
        </span>
      </td>

      {/* Side */}
      <td className="px-6 py-4">
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
          {student.side}
        </span>
      </td>

      {/* Service Role */}
      <td className="px-6 py-4">
        {student.serviceRole ? (
          <span className="px-3 py-1 bg-blue-50 text-blue-500 text-xs rounded-full font-medium">
            {student.serviceRole}
          </span>
        ) : (
          <span className="text-gray-300 text-sm">None</span>
        )}
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => onEdit(student.id)}
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <FaEdit className="text-base" />
          </button>
          <button
            onClick={() => onDelete(student.id)}
            className="text-red-300 hover:text-red-500 transition-colors"
          >
            <FaTrash className="text-base" />
          </button>
        </div>
      </td>
    </tr>
  );
}
