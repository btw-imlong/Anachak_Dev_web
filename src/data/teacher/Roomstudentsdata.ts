export type AttendanceStatus = "Present" | "Late" | "Absent" | null;

export interface RoomStudent {
  id: number;
  name: string;
  serviceRole?: string;
  side: string;
}

export const roomStudents: Record<string, RoomStudent[]> = {
  A1: [
    { id: 1, name: "Emma Wilson", serviceRole: "Library Duty", side: "Girls" },
    {
      id: 2,
      name: "Olivia Brown",
      serviceRole: "Cleaning Leader",
      side: "Girls",
    },
  ],
  A2: [
    { id: 3, name: "Ava Jones", serviceRole: "Garden Work", side: "Girls" },
    { id: 4, name: "Sophia Garcia", side: "Girls" },
  ],
  A3: [
    {
      id: 5,
      name: "Isabella Martinez",
      serviceRole: "Hall Monitor",
      side: "Girls",
    },
    {
      id: 6,
      name: "Mia Rodriguez",
      serviceRole: "Library Duty",
      side: "Girls",
    },
  ],
  B1: [
    { id: 7, name: "Liam Smith", side: "Boys" },
    { id: 8, name: "Noah Williams", side: "Boys" },
  ],
};
