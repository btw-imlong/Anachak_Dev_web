import { useState, useMemo } from "react";
import TaskFilters from "../../components/task-management/taskfilters.tsx";
import TaskTable from "../../components/task-management/tasktable.tsx";
import { tasksData, Side, RotationMonth } from "../../data/taskdata.ts";
import Header from "../../components/Header.tsx";

export default function TaskManagement() {
  const [selectedSide, setSelectedSide] = useState<Side | "All Sides">(
    "All Sides",
  );
  const [selectedMonth, setSelectedMonth] = useState<RotationMonth>("Month 1");

  const filteredTasks = useMemo(() => {
    return tasksData.filter((task) => {
      const sideMatch =
        selectedSide === "All Sides" || task.side === selectedSide;
      const monthMatch = task.rotationMonth === selectedMonth;
      return sideMatch && monthMatch;
    });
  }, [selectedSide, selectedMonth]);

  const handleEdit = (id: number) => {
    console.log("Edit task id:", id);
  };

  return (
    <div className="ml-64">
      <Header />

      <div className="min-h-screen bg-gray-50 font-sans">
        <div className="p-8">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Task Management
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Manage weekly tasks and 3-month rotation schedule
            </p>
          </div>

          {/* Filters */}
          <TaskFilters
            selectedSide={selectedSide}
            selectedMonth={selectedMonth}
            onSideChange={setSelectedSide}
            onMonthChange={setSelectedMonth}
            currentRotation="Rotation Month 1/3"
          />

          {/* Table */}
          <TaskTable tasks={filteredTasks} onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
}
