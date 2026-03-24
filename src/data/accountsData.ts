import { Teacher } from "../components/user-management/Teacherrow";
import { Student } from "../components/user-management/Studentrow";

export const teachersData: Teacher[] = [
  {
    id: 1,
    name: "Ms. Sarah Johnson",
    email: "sarah.j@school.edu",
    rooms: ["A1", "A2", "A3", "A4"],
    students: 8,
  },
  {
    id: 2,
    name: "Ms. Emily Davis",
    email: "emily.d@school.edu",
    rooms: ["A5", "A6", "A7", "A8"],
    students: 2,
  },
  {
    id: 3,
    name: "Ms. Maria Garcia",
    email: "maria.g@school.edu",
    rooms: ["A9", "A10", "A11", "A12"],
    students: 0,
  },
  {
    id: 4,
    name: "Ms. Lisa Anderson",
    email: "lisa.a@school.edu",
    rooms: ["B1", "B2", "B3", "B4"],
    students: 8,
  },
  {
    id: 5,
    name: "Ms. Jennifer Wilson",
    email: "jennifer.w@school.edu",
    rooms: ["B5", "B6", "B7", "B8"],
    students: 2,
  },
  {
    id: 6,
    name: "Mr. James Smith",
    email: "james.s@school.edu",
    rooms: ["C1", "C2", "C3", "C4"],
    students: 8,
  },
];

export const studentsData: Student[] = [
  {
    id: 1,
    name: "Emma Wilson",
    room: "A1",
    side: "Girls",
    serviceRole: "Library Duty",
  },
  {
    id: 2,
    name: "Olivia Brown",
    room: "A1",
    side: "Girls",
    serviceRole: "Cleaning Leader",
  },
  {
    id: 3,
    name: "Ava Jones",
    room: "A2",
    side: "Girls",
    serviceRole: "Garden Work",
  },
  {
    id: 4,
    name: "Sophia Garcia",
    room: "A2",
    side: "Girls",
    serviceRole: null,
  },
  {
    id: 5,
    name: "Isabella Martinez",
    room: "A3",
    side: "Girls",
    serviceRole: "Hall Monitor",
  },
  {
    id: 6,
    name: "Mia Rodriguez",
    room: "A3",
    side: "Girls",
    serviceRole: "Library Duty",
  },
];
