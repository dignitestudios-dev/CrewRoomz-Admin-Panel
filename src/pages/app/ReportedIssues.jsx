import React, { useState } from "react";

const ReportedIssues = () => {
  const [activeTab, setActiveTab] = useState("listers");

  const users = [
    {
      id: 1,
      name: "Mike Smith",
      email: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor...",
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
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Reported Issues
      </h1>

      {/* Tabs */}
      <div className="flex bg-white rounded-lg shadow  p-1 mb-4">
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
    <div className="bg-white rounded-2xl shadow p-4">
  <div className="overflow-x-auto">
    <div className="text-left text-sm border-b bg-[#F9FAFA] p-2 rounded-lg font-semibold">
      {/* Table Header */}
      <div className="grid grid-cols-9 text-left bg-[#DEF5FF] rounded-lg">
        <div className="py-4 px-4 font-semibold">#</div>
        <div className="py-4 px-1 font-semibold">Lister Name</div>
        <div className="py-4 px-4 font-semibold col-span-2">Reason</div>
        <div className="py-4  font-semibold">Reported By</div>
                <div className="py-4 px-4 font-semibold"> Date</div>

        {/* <div className="py-4 px-4 font-semibold">Location</div> */}
        <div className="py-4 px-2 font-semibold">Time</div>
        <div className="py-4 px-4 font-semibold">Action</div>
      </div>

      {/* Table Rows */}
      <div>
        {Array(10)
          .fill(users[0])  // Replace with your users array
          .map((user, index) => (
            <div
              key={index}
              className="grid grid-cols-9 border-b last:border-none text-sm text-gray-700"
            >
              <div className="py-4 px-4">{index + 1}</div>
                           <div className="py-4">{user.name}</div>

              <div className="py-4 px-4 col-span-2">{user.email}</div>
              <div className="py-4 px-4">test user</div>
                            <div className="py-4 px-4">{user.joinDate}</div>

              {/* <div className="py-4 px-4">{user.location}</div> */}
              <div className="py-4 px-4">{user.subscription}</div>
              <div className="py-4 px-4 text-sm col-span-2 flex text-[#2BB048] hover:underline cursor-pointer">Mark as Read <span className="text-[#DC1D00] ml-2 hover:underline cursor-pointer">Deactivate</span></div>

              {/* <div className="py-4 px-4">
                <span
                  className={`px-4 py-1.5 text-xs rounded-full font-medium ${
                    (index + 1) % 2 === 0
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {(index + 1) % 2 === 0 ? "Active" : "Inactive"}
                </span>
              </div> */}
            </div>
          ))}
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ReportedIssues;
