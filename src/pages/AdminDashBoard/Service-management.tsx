import { useState } from "react";
import ServiceHeader from "../../components/service-management/Serviceheader.tsx";
import ServiceCard from "../../components/service-management/Servicecard.tsx";
import CreateServiceModal from "../../components/service-management/Createservicemodal.tsx";
import AssignServiceModal from "../../components/service-management/Assignservicemodal.tsx";
import { servicesData } from "../../data/Servicesdata.ts";
import Header from "../../components/Header.tsx";

const allStudents = [
  { id: 1, name: "Emma Wilson", room: "Room A1" },
  { id: 2, name: "Mia Rodriguez", room: "Room A3" },
  { id: 3, name: "Elizabeth Wright", room: "Room B2" },
  { id: 4, name: "Chloe Baker", room: "Room B5" },
  { id: 5, name: "Liam Smith", room: "Room C1" },
  { id: 6, name: "James Garcia", room: "Room C3" },
];

export default function ServiceManagement() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);

  const handleCreateService = (name: string, description: string) => {
    console.log("New service:", { name, description });
    // TODO: connect to your API
  };

  const handleAssignService = (serviceId: number, studentId: number) => {
    console.log("Assign:", { serviceId, studentId });
    // TODO: connect to your API
  };

  const handleEdit = (id: number) => console.log("Edit service id:", id);
  const handleDelete = (id: number) => console.log("Delete service id:", id);

  return (
    <div className="ml-64">
      <Header />

      <div className="min-h-screen bg-gray-50 font-sans">
        <div className="p-8">
          {/* Header */}
          <ServiceHeader
            onCreateService={() => setShowCreateModal(true)}
            onAssignToStudent={() => setShowAssignModal(true)}
          />

          {/* Service Cards List */}
          <div className="flex flex-col gap-4">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Create Service Modal */}
      <CreateServiceModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateService}
      />

      {/* Assign Service Modal */}
      <AssignServiceModal
        isOpen={showAssignModal}
        onClose={() => setShowAssignModal(false)}
        services={servicesData.map((s) => ({ id: s.id, title: s.title }))}
        students={allStudents}
        onAssign={handleAssignService}
      />
    </div>
  );
}
