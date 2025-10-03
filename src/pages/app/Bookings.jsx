import React, { useState } from "react";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("private");

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
    <div className="p-6 pt-2 min-h-screen mt-4 ">
      {/* Heading */}
      {/* <div className="flex flex-col md:flex-row md:justify-between md:items-center"> */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Booking Management
      </h1>

      {/* Tabs */}
      <div className="flex justify-between">
        <div className="flex bg-white rounded-lg  w-[464px] p-1 mb-4 ">
          <button
            onClick={() => setActiveTab("private")}
            className={`px-11 py-2 rounded-lg font-medium ${activeTab === "private"
                ? "bg-[#24A3FF] text-white"
                : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            Private
          </button>
          <button
            onClick={() => setActiveTab("multi")}
            className={`px-11 py-2  rounded-lg font-medium ${activeTab === "multi"
                ? "bg-[#24A3FF] text-white"
                : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            Multi
          </button>
          <button
            onClick={() => setActiveTab("semiprivate")}
            className={`px-12 py-2 ml-1 rounded-lg font-medium ${activeTab === "semiprivate"
                ? "bg-[#24A3FF] text-white"
                : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            Semi Private
          </button>
        </div>

        <div className="flex items-center bg-white rounded-lg  w-[252px] p-2 mb-4 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
          <h1 className="text-sm text-gray-700 text-semibold">Search by name here</h1>
        </div>
      </div>
      {/* </div> */}

      {/* Table */}
      <div className="bg-white rounded-2xl  p-4">
        <div className="overflow-x-auto">
          <div className="text-left text-sm border-b bg-[#F9FAFA] p-4 rounded-lg font-semibold">
            {/* Table Header */}
            <div className="grid grid-cols-9 text-left bg-[#DEF5FF] rounded-lg">
              <div className="py-4 px-4 font-semibold">#</div>
              <div className="py-4 font-semibold">Booking Id</div>
              <div className="py-4 px-2 font-semibold">Booking Type</div>
              <div className="py-4 px-8 font-semibold">Bed Type</div>
              <div className="py-4 px-4 font-semibold">Location</div>
              <div className="py-4 px-2 font-semibold">Host Name</div>
              <div className="py-4  font-semibold">User Name</div>
              <div className="py-4  font-semibold">Stay Duration</div>
              <div className="py-4 px-4 font-semibold">Status</div>

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
                    <div className="py-4 px-4">{index + 1}</div>

                    {/* <div className="py-4 px-4 flex items-center gap-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                {user.name}
              </div> */}
                    <div className="py-4 ">{user.email}</div>
                    <div className="py-4 px-14">{user.totalProperties}</div>
                    <div className="py-4 px-4">{user.location}</div>
                    <div className="py-4 px-4">{user.subscription}</div>
                    <div className="py-4 ">{user.joinDate}</div>
                    <div className="py-4 ">21 Jul - 08 Aug, 2025</div>

                    <div className="py-4 px-4">
                      <span
                        className={`px-4 py-1.5 text-xs rounded-full font-medium ${(index + 1) % 2 === 0
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

export default Bookings;
