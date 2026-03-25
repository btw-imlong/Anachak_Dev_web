interface RoomBadgeProps {
  room: string;
}

export default function RoomBadge({ room }: RoomBadgeProps) {
  return (
    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
      {room}
    </span>
  );
}
