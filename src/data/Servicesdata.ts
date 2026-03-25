import { Service } from "../components/service-management/Servicecard";

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Library Duty",
    description: "Manage library operations, organize books, assist students",
    students: [
      { id: 1, name: "Emma Wilson", room: "Room A1" },
      { id: 2, name: "Mia Rodriguez", room: "Room A3" },
      { id: 3, name: "Elizabeth Wright", room: "Room B2" },
      { id: 4, name: "Chloe Baker", room: "Room B5" },
      { id: 5, name: "Liam Smith", room: "Room C1" },
      { id: 6, name: "James Garcia", room: "Room C3" },
      { id: 7, name: "Ethan Gonzalez", room: "Room D2" },
      { id: 8, name: "Jack Martin", room: "Room D5" },
    ],
  },
  {
    id: 2,
    title: "Cleaning Leader",
    description: "Oversee classroom and hallway cleaning schedules",
    students: [
      { id: 9, name: "Olivia Brown", room: "Room A1" },
      { id: 10, name: "Noah Williams", room: "Room B1" },
      { id: 11, name: "Sophia Davis", room: "Room C2" },
      { id: 12, name: "Lucas Moore", room: "Room D3" },
    ],
  },
  {
    id: 3,
    title: "Garden Work",
    description: "Maintain school garden, water plants, and keep grounds tidy",
    students: [
      { id: 13, name: "Ava Jones", room: "Room A2" },
      { id: 14, name: "Mason Taylor", room: "Room B3" },
      { id: 15, name: "Isabella Lee", room: "Room C4" },
    ],
  },
  {
    id: 4,
    title: "Hall Monitor",
    description: "Monitor hallways during breaks and ensure student safety",
    students: [
      { id: 16, name: "Isabella Martinez", room: "Room A3" },
      { id: 17, name: "Elijah Harris", room: "Room B4" },
      { id: 18, name: "Amelia Clark", room: "Room D1" },
    ],
  },
];
