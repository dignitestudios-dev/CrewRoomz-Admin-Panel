import React, { useState } from "react";

const Users = () => {
  const [activeTab, setActiveTab] = useState("listers");

  const users = [
    {
      id: 1,
      name: "Mike Smith",
      email: "mikesmith@gmail.com",
      totalProperties: "09",
      location: "Gaular, Norway",
      subscription: "Plan 1",
      joinDate: "12 Aug, 2025",
      status: "Inactive",
      avatar:
        "https://i.pravatar.cc/40?img=1", // placeholder avatar
    },
  ];

  return (
    <div className="p-6 pt-2 min-h-screen ">
      {/* Heading */}
      <div className="flex flex-col mt-4 md:flex-row md:justify-between md:items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        User Management
      </h1>

      {/* Tabs */}
      <div className="flex bg-white rounded-lg  p-1 mb-4">
        <button
          onClick={() => setActiveTab("listers")}
          className={`px-14 py-2 rounded-lg font-medium ${
            activeTab === "listers"
              ? "bg-[#24A3FF] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Listers
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={`px-14 py-2 rounded-lg font-medium ${
            activeTab === "users"
              ? "bg-[#24A3FF] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Users
        </button>
      </div>
      </div>

      {/* Table */}
    <div className="bg-white rounded-2xl  p-4">
  <div className="overflow-x-auto">
    <div className="text-left text-sm border-b bg-[#F9FAFA] p-2 rounded-lg font-semibold">
      {/* Table Header */}
      <div className="grid grid-cols-8 text-left bg-[#DEF5FF] rounded-lg">
        <div className="py-4 px-4 font-semibold">#</div>
        <div className="py-4  font-semibold">Lister Name</div>
        <div className="py-4 px-4 font-semibold">Email</div>
        <div className="py-4 px-4 font-semibold">Total Properties</div>
        <div className="py-4 px-4 font-semibold">Location</div>
        <div className="py-4  font-semibold">Subscription Plan</div>
        <div className="py-4 px-4 font-semibold">Join Date</div>
        <div className="py-4 px-4 font-semibold">Status</div>
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
              <div className="py-4  flex items-center gap-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                {user.name}
              </div>
              <div className="py-4 px-4">{user.email}</div>
              <div className="py-4 px-14">{user.totalProperties}</div>
              <div className="py-4 px-4">{user.location}</div>
              <div className="py-4 px-4">{user.subscription}</div>
              <div className="py-4 px-4">{user.joinDate}</div>
              <div className="py-4 px-4">
                <span
                  className={`px-4 py-1.5 text-xs rounded-full font-medium ${
                    (index + 1) % 2 === 0
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {(index + 1) % 2 === 0 ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Users;
