import TeacherRow, {
  Teacher,
} from "../../components/user-management/Teacherrow.tsx";

interface TeacherTableProps {
  teachers: Teacher[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TeacherTable({
  teachers,
  onEdit,
  onDelete,
}: TeacherTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Name
            </th>
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Email
            </th>
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Assigned Rooms
            </th>
            <th className="text-left text-sm font-medium text-gray-500 px-6 py-4">
              Students
            </th>
            <th className="text-right text-sm font-medium text-gray-500 px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <TeacherRow
              key={teacher.id}
              teacher={teacher}
              isLast={index === teachers.length - 1}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
