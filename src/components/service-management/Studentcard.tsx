interface StudentCardProps {
  name: string;
  room: string;
}

export default function StudentCard({ name, room }: StudentCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
      <p className="text-sm font-semibold text-gray-800">{name}</p>
      <p className="text-xs text-gray-400 mt-0.5">{room}</p>
    </div>
  );
}
