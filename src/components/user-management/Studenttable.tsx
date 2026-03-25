import StudentRow, { Student } from "../user-management/Studentrow.tsx";

interface StudentTableProps {
  students: Student[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function StudentTable({
  students,
  onEdit,
  onDelete,
}: StudentTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Name
            </th>
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Room
            </th>
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Side
            </th>
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Service Role
            </th>
            <th className="text-right text-sm font-medium text-gray-500 px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={student.id}
              student={student}
              isLast={index === students.length - 1}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
