export interface DayTask {
  day: string;
  task: string;
  rotationMonth: string;
}

export interface RoomSchedule {
  room: string;
  side: "Girls" | "Boys";
  tasks: DayTask[];
}

export const weeklySchedule: RoomSchedule[] = [
  {
    room: "A1",
    side: "Girls",
    tasks: [
      { day: "Monday", task: "Room Cleaning", rotationMonth: "Month 1/3" },
      { day: "Tuesday", task: "Corridor Duty", rotationMonth: "Month 1/3" },
      {
        day: "Wednesday",
        task: "Garden Maintenance",
        rotationMonth: "Month 1/3",
      },
      {
        day: "Thursday",
        task: "Dining Hall Service",
        rotationMonth: "Month 1/3",
      },
      {
        day: "Friday",
        task: "Library Organization",
        rotationMonth: "Month 1/3",
      },
    ],
  },
  {
    room: "A2",
    side: "Girls",
    tasks: [
      { day: "Monday", task: "Corridor Duty", rotationMonth: "Month 1/3" },
      {
        day: "Tuesday",
        task: "Garden Maintenance",
        rotationMonth: "Month 1/3",
      },
      { day: "Wednesday", task: "Room Cleaning", rotationMonth: "Month 1/3" },
      {
        day: "Thursday",
        task: "Library Organization",
        rotationMonth: "Month 1/3",
      },
      {
        day: "Friday",
        task: "Dining Hall Service",
        rotationMonth: "Month 1/3",
      },
    ],
  },
];

export const currentRotation = {
  label: "Month 1 of 3",
  period: "Jan - Mar 2026",
  description: "Tasks rotate every 3 months",
};
