export type Side = "Girls" | "Boys";
export type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
export type RotationMonth = "Month 1" | "Month 2" | "Month 3";

export interface Task {
  id: number;
  room: string;
  side: Side;
  day: Day;
  task: string;
  rotationMonth: RotationMonth;
}

export const tasksData: Task[] = [
  {
    id: 1,
    room: "A1",
    side: "Girls",
    day: "Monday",
    task: "Room Cleaning",
    rotationMonth: "Month 1",
  },
  {
    id: 2,
    room: "A1",
    side: "Girls",
    day: "Tuesday",
    task: "Corridor Duty",
    rotationMonth: "Month 1",
  },
  {
    id: 3,
    room: "A1",
    side: "Girls",
    day: "Wednesday",
    task: "Garden Maintenance",
    rotationMonth: "Month 1",
  },
  {
    id: 4,
    room: "A1",
    side: "Girls",
    day: "Thursday",
    task: "Dining Hall Service",
    rotationMonth: "Month 1",
  },
  {
    id: 5,
    room: "A1",
    side: "Girls",
    day: "Friday",
    task: "Library Organization",
    rotationMonth: "Month 1",
  },
  {
    id: 6,
    room: "A2",
    side: "Girls",
    day: "Monday",
    task: "Corridor Duty",
    rotationMonth: "Month 1",
  },
  {
    id: 7,
    room: "A2",
    side: "Girls",
    day: "Tuesday",
    task: "Garden Maintenance",
    rotationMonth: "Month 1",
  },
  {
    id: 8,
    room: "A2",
    side: "Girls",
    day: "Wednesday",
    task: "Room Cleaning",
    rotationMonth: "Month 2",
  },
  {
    id: 9,
    room: "B1",
    side: "Boys",
    day: "Monday",
    task: "Dining Hall Service",
    rotationMonth: "Month 2",
  },
  {
    id: 10,
    room: "B1",
    side: "Boys",
    day: "Tuesday",
    task: "Library Organization",
    rotationMonth: "Month 2",
  },
  {
    id: 11,
    room: "B2",
    side: "Boys",
    day: "Wednesday",
    task: "Room Cleaning",
    rotationMonth: "Month 3",
  },
  {
    id: 12,
    room: "B2",
    side: "Boys",
    day: "Thursday",
    task: "Corridor Duty",
    rotationMonth: "Month 3",
  },
  {
    id: 13,
    room: "C1",
    side: "Boys",
    day: "Friday",
    task: "Garden Maintenance",
    rotationMonth: "Month 3",
  },
];
