import { useState } from "react";
import { FaUserTie, FaUserGraduate } from "react-icons/fa";
import TabSwitcher from "../../components/user-management/Tabswitcher.tsx";
import TeacherTable from "../../components/user-management/Teachertable.tsx";
import StudentTable from "../../components/user-management/Studenttable.tsx";
import CreateTeacherModal from "../../components/user-management/Createteachermodal.tsx";
import CreateStudentModal from "../../components/user-management/Createstudentmodal.tsx";
import { teachersData, studentsData } from "../../data/accountsData.ts";
import Header from "../../components/Header.tsx";

export default function UserManagement() {
  const [activeTab, setActiveTab] = useState<"teachers" | "students">(
    "teachers",
  );
  const [showCreateTeacher, setShowCreateTeacher] = useState(false);
  const [showCreateStudent, setShowCreateStudent] = useState(false);

  const handleEdit = (id: number) => console.log("Edit id:", id);
  const handleDelete = (id: number) => console.log("Delete id:", id);

  const handleCreateTeacher = (
    name: string,
    email: string,
    password: string,
    rooms: string[],
  ) => {
    console.log("New teacher:", { name, email, password, rooms });
    // TODO: connect to your API / state management
  };

  const handleCreateStudent = (
    name: string,
    room: string,
    serviceRole: string | null,
  ) => {
    console.log("New student:", { name, room, serviceRole });
    // TODO: connect to your API / state management
  };

  const handleButtonClick = () => {
    if (activeTab === "teachers") setShowCreateTeacher(true);
    else setShowCreateStudent(true);
  };

  return (
    <div className="ml-64">
      <Header />

      <div className="min-h-screen bg-gray-50 p-8 font-sans">
        {/* Tab Switcher */}
        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Page Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {activeTab === "teachers"
                ? "Teacher Accounts"
                : "Student Accounts"}
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              {activeTab === "teachers"
                ? "Manage teacher accounts and room assignments"
                : "Manage student accounts and room assignments"}
            </p>
          </div>

          <button
            onClick={handleButtonClick}
            className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-700 transition-all"
          >
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

      {/* Modals */}
      <CreateTeacherModal
        isOpen={showCreateTeacher}
        onClose={() => setShowCreateTeacher(false)}
        onCreate={handleCreateTeacher}
      />
      <CreateStudentModal
        isOpen={showCreateStudent}
        onClose={() => setShowCreateStudent(false)}
        onCreate={handleCreateStudent}
      />
    </div>
  );
}
