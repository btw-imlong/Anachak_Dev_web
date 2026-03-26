import Header from "../../components/Header.tsx";
import RotationBanner from "../../components/teacher-dashboard/Rotationbanner.tsx";
import RoomScheduleCard from "../../components/teacher-dashboard/Roomschedulecard.tsx";
import {
  weeklySchedule,
  currentRotation,
} from "../../data/teacher/Weeklyscheduledata.ts";

export default function WeeklyTasks() {
  return (
    <div className="ml-64">
      <Header />
      <div className="min-h-screen bg-gray-50 p-8 font-sans">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Weekly Task Schedule
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            View weekly tasks for your assigned rooms
          </p>
        </div>

        {/* Rotation Banner */}
        <RotationBanner
          label={currentRotation.label}
          period={currentRotation.period}
          description={currentRotation.description}
        />

        {/* Room Schedule Cards */}
        {weeklySchedule.map((schedule) => (
          <RoomScheduleCard
            key={schedule.room}
            room={schedule.room}
            side={schedule.side}
            tasks={schedule.tasks}
          />
        ))}
      </div>
    </div>
  );
}
