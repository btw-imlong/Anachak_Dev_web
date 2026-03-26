import { Room } from "../../components/teacher-dashboard/Roomcard.tsx";

export const assignedRoomsData: Room[] = [
  {
    id: 1,
    roomName: "A1",
    side: "Girls",
    students: [
      { id: 1, name: "Emma Wilson" },
      { id: 2, name: "Olivia Brown" },
    ],
  },
  {
    id: 2,
    roomName: "A2",
    side: "Girls",
    students: [
      { id: 3, name: "Ava Jones" },
      { id: 4, name: "Sophia Garcia" },
    ],
  },
  {
    id: 3,
    roomName: "A3",
    side: "Girls",
    students: [
      { id: 5, name: "Isabella Martinez" },
      { id: 6, name: "Mia Rodriguez" },
    ],
  },
  {
    id: 4,
    roomName: "A4",
    side: "Girls",
    students: [
      { id: 7, name: "Charlotte Lee" },
      { id: 8, name: "Amelia Walker" },
    ],
  },
];
