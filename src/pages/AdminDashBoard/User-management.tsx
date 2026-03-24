import { useState } from "react";
import { FaUserTie, FaUserGraduate } from "react-icons/fa";
import TabSwitcher from "../../components/user-management/Tabswitcher.tsx";
import TeacherTable from "../../components/user-management/Teachertable.tsx";
import StudentTable from "../../components/user-management/Studenttable.tsx";
import { teachersData, studentsData } from "../../data/accountsData.ts";

export default function UserManagement() {
  const [activeTab, setActiveTab] = useState<"teachers" | "students">(
    "teachers",
  );

  const handleEdit = (id: number) => {
    console.log("Edit id:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete id:", id);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans ml-60">
      {/* Tab Switcher */}
      <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Page Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {activeTab === "teachers" ? "Teacher Accounts" : "Student Accounts"}
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            {activeTab === "teachers"
              ? "Manage teacher accounts and room assignments"
              : "Manage student accounts and room assignments"}
          </p>
        </div>

        <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-700 transition-all">
          {activeTab === "teachers" ? (
            <>
              <FaUserTie className="text-xs" />
              Create Teacher Account
            </>
          ) : (
            <>
              <FaUserGraduate className="text-xs" />
              Create Student Account
            </>
          )}
        </button>
      </div>

      {/* Table */}
      {activeTab === "teachers" ? (
        <TeacherTable
          teachers={teachersData}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <StudentTable
          students={studentsData}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
