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

interface CreateTeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (
    name: string,
    email: string,
    password: string,
    rooms: string[],
  ) => void;
}

export default function CreateTeacherModal({
  isOpen,
  onClose,
  onCreate,
}: CreateTeacherModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const toggleRoom = (room: string) => {
    setSelectedRooms((prev) =>
      prev.includes(room) ? prev.filter((r) => r !== room) : [...prev, room],
    );
  };

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !password.trim()) return;
    onCreate(name, email, password, selectedRooms);
    setName("");
    setEmail("");
    setPassword("");
    setSelectedRooms([]);
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
          Create Teacher Account
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter teacher name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="teacher@school.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 transition"
          />
        </div>

        {/* Assign Rooms */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Assign Rooms (select multiple)
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-400 outline-none hover:bg-gray-200 transition"
            >
              <span className={selectedRooms.length > 0 ? "text-gray-700" : ""}>
                {selectedRooms.length > 0
                  ? selectedRooms.join(", ")
                  : "Select rooms to assign"}
              </span>
              <FaChevronDown className="text-xs text-gray-400" />
            </button>

            {dropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-100 rounded-xl shadow-lg p-3 grid grid-cols-5 gap-2 max-h-48 overflow-y-auto">
                {availableRooms.map((room) => (
                  <button
                    key={room}
                    type="button"
                    onClick={() => toggleRoom(room)}
                    className={`px-2 py-1.5 rounded-lg text-xs font-medium transition ${
                      selectedRooms.includes(room)
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {room}
                  </button>
                ))}
              </div>
            )}
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
