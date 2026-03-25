import { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";

const availableRooms = [
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6",
  "A7",
  "A8",
  "A9",
  "A10",
];

const serviceRoles = [
  "Library Duty",
  "Cleaning Leader",
  "Garden Work",
  "Hall Monitor",
  "Dining Hall Service",
  "Corridor Duty",
  "Library Organization",
];

interface CreateStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string, room: string, serviceRole: string | null) => void;
}

export default function CreateStudentModal({
  isOpen,
  onClose,
  onCreate,
}: CreateStudentModalProps) {
  const [name, setName] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!name.trim() || !selectedRoom) return;
    onCreate(name, selectedRoom, selectedRole || null);
    setName("");
    setSelectedRoom("");
    setSelectedRole("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <FaTimes />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Create Student Account
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 transition"
          />
        </div>

        {/* Assign Room */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Assign Room
          </label>
          <div className="relative">
            <select
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 bg-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-gray-300 transition cursor-pointer"
              style={{ color: selectedRoom ? "#374151" : "#9ca3af" }}
            >
              <option value="" disabled>
                Select room
              </option>
              {availableRooms.map((room) => (
                <option key={room} value={room}>
                  {room}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>

        {/* Service Role (Optional) */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Role (Optional)
          </label>
          <div className="relative">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 bg-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-gray-300 transition cursor-pointer"
              style={{ color: selectedRole ? "#374151" : "#9ca3af" }}
            >
              <option value="">Select service role</option>
              {serviceRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-700 transition-all"
          >
            Create Account
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
