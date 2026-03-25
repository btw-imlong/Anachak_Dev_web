interface TabSwitcherProps {
  activeTab: "teachers" | "students";
  onTabChange: (tab: "teachers" | "students") => void;
}

export default function TabSwitcher({
  activeTab,
  onTabChange,
}: TabSwitcherProps) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onTabChange("teachers")}
        className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
          activeTab === "teachers"
            ? "bg-white border-gray-300 text-gray-800 shadow-sm"
            : "bg-transparent border-gray-200 text-gray-500 hover:bg-white"
        }`}
      >
        Teachers
      </button>
      <button
        onClick={() => onTabChange("students")}
        className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
          activeTab === "students"
            ? "bg-white border-gray-300 text-gray-800 shadow-sm"
            : "bg-transparent border-gray-200 text-gray-500 hover:bg-white"
        }`}
      >
        Students
      </button>
    </div>
  );
}
