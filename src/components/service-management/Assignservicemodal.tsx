import { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";

interface AssignServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: { id: number; title: string }[];
  students: { id: number; name: string; room: string }[];
  onAssign: (serviceId: number, studentId: number) => void;
}

export default function AssignServiceModal({
  isOpen,
  onClose,
  services,
  students,
  onAssign,
}: AssignServiceModalProps) {
  const [selectedService, setSelectedService] = useState<number | "">("");
  const [selectedStudent, setSelectedStudent] = useState<number | "">("");

  if (!isOpen) return null;

  const handleAssign = () => {
    if (selectedService === "" || selectedStudent === "") return;
    onAssign(Number(selectedService), Number(selectedStudent));
    setSelectedService("");
    setSelectedStudent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <FaTimes />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Assign Service to Student
        </h2>

        {/* Select Service */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Service
          </label>
          <div className="relative">
            <select
              value={selectedService}
              onChange={(e) =>
                setSelectedService(
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
              className="w-full appearance-none px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-500 outline-none focus:ring-2 focus:ring-gray-300 transition cursor-pointer"
            >
              <option value="">Choose a service</option>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>

        {/* Select Student */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Student
          </label>
          <div className="relative">
            <select
              value={selectedStudent}
              onChange={(e) =>
                setSelectedStudent(
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
              className="w-full appearance-none px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-500 outline-none focus:ring-2 focus:ring-gray-300 transition cursor-pointer"
            >
              <option value="">Choose a student</option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — {s.room}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleAssign}
            className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-700 transition-all"
          >
            Assign Service
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
