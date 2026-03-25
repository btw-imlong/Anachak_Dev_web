import { FaUserPlus, FaPlus } from "react-icons/fa";

interface ServiceHeaderProps {
  onCreateService: () => void;
  onAssignToStudent: () => void;
}

export default function ServiceHeader({
  onCreateService,
  onAssignToStudent,
}: ServiceHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Service Management</h1>
        <p className="text-sm text-gray-400 mt-1">
          Create and assign student services and duties
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onCreateService}
          className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all"
        >
          <FaPlus className="text-xs" />
          Create Service
        </button>

        <button
          onClick={onAssignToStudent}
          className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-700 transition-all"
        >
          <FaUserPlus className="text-xs" />
          Assign to Student
        </button>
      </div>
    </div>
  );
}
