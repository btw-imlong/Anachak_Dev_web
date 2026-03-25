import { FaFilter, FaChevronDown } from "react-icons/fa";
import { RotationMonth, Side } from "../../data/taskdata";

interface TaskFiltersProps {
  selectedSide: Side | "All Sides";
  selectedMonth: RotationMonth;
  onSideChange: (side: Side | "All Sides") => void;
  onMonthChange: (month: RotationMonth) => void;
  currentRotation: string;
}

export default function TaskFilters({
  selectedSide,
  selectedMonth,
  onSideChange,
  onMonthChange,
  currentRotation,
}: TaskFiltersProps) {
  return (
    <div className="flex items-center justify-between bg-white border border-gray-100 rounded-2xl px-5 py-3 mb-6 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Filter icon + label */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <FaFilter className="text-xs" />
          <span className="font-medium">Filters:</span>
        </div>

        {/* Side filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 font-medium">Side:</span>
          <div className="relative">
            <select
              value={selectedSide}
              onChange={(e) =>
                onSideChange(e.target.value as Side | "All Sides")
              }
              className="appearance-none bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1.5 pr-8 rounded-lg outline-none cursor-pointer hover:bg-gray-200 transition"
            >
              <option value="All Sides">All Sides</option>
              <option value="Girls">Girls</option>
              <option value="Boys">Boys</option>
            </select>
            <FaChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>

        {/* Rotation Month filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 font-medium">
            Rotation Month:
          </span>
          <div className="relative">
            <select
              value={selectedMonth}
              onChange={(e) => onMonthChange(e.target.value as RotationMonth)}
              className="appearance-none bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1.5 pr-8 rounded-lg outline-none cursor-pointer hover:bg-gray-200 transition"
            >
              <option value="Month 1">Month 1</option>
              <option value="Month 2">Month 2</option>
              <option value="Month 3">Month 3</option>
            </select>
            <FaChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Current rotation badge */}
      <span className="text-sm font-medium text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full">
        Current: {currentRotation}
      </span>
    </div>
  );
}
