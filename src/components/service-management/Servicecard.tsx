import { FaEdit, FaTrash } from "react-icons/fa";
import StudentCard from "../service-management/Studentcard.tsx";

export interface AssignedStudent {
  id: number;
  name: string;
  room: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  students: AssignedStudent[];
}

interface ServiceCardProps {
  service: Service;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ServiceCard({
  service,
  onEdit,
  onDelete,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      {/* Card Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-gray-900">{service.title}</h2>
            <span className="px-3 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">
              {service.students.length} students
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{service.description}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onEdit(service.id)}
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <FaEdit className="text-base" />
          </button>
          <button
            onClick={() => onDelete(service.id)}
            className="text-red-300 hover:text-red-500 transition-colors"
          >
            <FaTrash className="text-base" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-100" />

      {/* Assigned Students */}
      <p className="text-sm font-medium text-gray-600 mb-3">
        Assigned Students:
      </p>
      <div className="grid grid-cols-4 gap-3">
        {service.students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            room={student.room}
          />
        ))}
      </div>
    </div>
  );
}
