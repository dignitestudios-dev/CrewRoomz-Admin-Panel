import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import NotificationsModal from "../../components/NotificationsModal";

const Notifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    {
      id: 1,
      name: "Mike Smith",
      email: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor...",
      totalProperties: "09",
      location: "22 Sep, 2025",
      subscription: "08:00 PM",
      joinDate: "12 Aug, 2025",
      status: "Inactive",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
  ];

  return (
    <div className="p-6 pt-2 min-h-screen ">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Notifications
        </h1>

        {/* Create Button */}
        <div className="flex text-white rounded-lg shadow p-1 mb-4 button-bg">
  <button
    onClick={() => setIsModalOpen(true)}
    className="px-8 py-1 rounded-lg font-medium flex items-center gap-2"
  >
    <span className="text-2xl ">+</span>
    <span>Create</span>
  </button>
</div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow p-4">
        <div className="overflow-x-auto">
          <div className="text-left text-sm border-b bg-[#F9FAFA] p-2 rounded-lg">
            {/* Table Header */}
            <div className="grid grid-cols-8 text-left bg-[#DEF5FF] font-medium rounded-lg">
              <div className="py-4 px-4 ">#</div>
              <div className="py-4 px-4 ">Name</div>
              <div className="py-4 px-4  col-span-2">Description</div>
              <div className="py-4 px-4 ">Date</div>
              <div className="py-4 px-4 ">Time</div>
              <div className="py-4 px-4 ">Status</div>
              <div className="py-4 px-4 ">Action</div>
            </div>

            {/* Table Rows */}
            <div>
              {Array(10)
                .fill(users[0])
                .map((user, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-8 border-b last:border-none font-medium text-sm text-gray-700"
                  >
                    <div className="py-4 px-4">{index + 1}</div>
                    <div className="py-4 px-4 flex items-center gap-2">
                      {user.name}
                    </div>
                    <div className="py-4 px-4 col-span-2">{user.email}</div>
                    <div className="py-4 px-4">{user.location}</div>
                    <div className="py-4 px-4">{user.subscription}</div>
                    <div className="py-4 px-4 ">Delivered</div>
                    <div className="py-4 px-4 text-red-500">
                      <Trash2 />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <NotificationsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Notifications;
