interface Student {
  id: number;
  name: string;
}

export interface Room {
  id: number;
  roomName: string;
  side: "Girls" | "Boys";
  students: Student[];
}

interface RoomCardProps {
  room: Room;
  onViewDetails: (id: number) => void;
}

export default function RoomCard({ room, onViewDetails }: RoomCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
      {/* Room name + side badge */}
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-black text-gray-900">{room.roomName}</h2>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            room.side === "Girls"
              ? "bg-pink-100 text-pink-500"
              : "bg-blue-100 text-blue-500"
          }`}
        >
          {room.side}
        </span>
      </div>

      {/* Student count */}
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
        {room.students.length} students
      </div>

      <hr className="border-gray-100" />

      {/* Students list */}
      <div>
        <p className="text-xs text-gray-400 mb-1">Students:</p>
        <ul className="space-y-0.5">
          {room.students.map((s) => (
            <li key={s.id} className="text-sm text-gray-700">
              • {s.name}
            </li>
          ))}
        </ul>
      </div>

      {/* View Details */}
      <button
        onClick={() => onViewDetails(room.id)}
        className="text-green-500 text-sm font-medium hover:text-green-700 transition-colors text-left mt-auto"
      >
        View Details →
      </button>
    </div>
  );
}
