import { Trash2 } from "lucide-react";
import React, { useState } from "react";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("listers");

  const users = [
    {
      id: 1,
      name: "Mike Smith",
      email: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor...",
      totalProperties: "09",
      location: "22 Sep, 2025",
      subscription: "08:00 pM",
      joinDate: "12 Aug, 2025",
      status: "Inactive",
      avatar:
        "https://i.pravatar.cc/40?img=1", // placeholder avatar
    },
  ];

  return (
    <div className="p-6 pt-2 min-h-screen ">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Notifications
      </h1>

      {/* Tabs */}
      <div className="flex text-white rounded-lg shadow  p-1 mb-4 bg-blue-500">
     
        <button
          onClick={() => setActiveTab("users")}
          className="px-8 py-2 rounded-lg font-medium "
        >
        + Create
        </button>
      </div>
      </div>

      {/* Table */}
    <div className="bg-white rounded-2xl shadow p-4">
  <div className="overflow-x-auto">
    <div className="text-left text-sm border-b bg-[#F9FAFA] p-2 rounded-lg font-semibold">
      {/* Table Header */}
      <div className="grid grid-cols-8 text-left bg-[#DEF5FF] rounded-lg">
        <div className="py-4 px-4 font-semibold">#</div>
        <div className="py-4 px-4 font-semibold">Name</div>
        <div className="py-4 px-4 font-semibold col-span-2">Description</div>
        <div className="py-4 px-4 font-semibold">Date</div>
        <div className="py-4 px-4 font-semibold">Time</div>
        {/* <div className="py-4 px-4 font-semibold">Join Date</div> */}
        <div className="py-4 px-4 font-semibold">Status</div>
        <div className="py-4 px-4 font-semibold">Action</div>

      </div>

      {/* Table Rows */}
      <div>
        {Array(10)
          .fill(users[0])  // Replace with your users array
          .map((user, index) => (
            <div
              key={index}
              className="grid grid-cols-8 border-b last:border-none text-sm text-gray-700"
            >
              <div className="py-4 px-4">{index + 1}</div>
              <div className="py-4 px-4 flex items-center gap-2">
                {/* <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                /> */}
                {user.name}
              </div>
              <div className="py-4 px-4 col-span-2">{user.email}</div>
              <div className="py-4 px-4">{user.location}</div>
              <div className="py-4 px-4">{user.subscription}</div>
              {/* <div className="py-4 px-4">{user.joinDate}</div> */}
                                    <div className="py-4 px-4 font-semibold ">Delivered</div>

                      <div className="py-4 px-4 font-semibold text-red-500"><Trash2/></div>

            </div>
          ))}
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Notifications;
