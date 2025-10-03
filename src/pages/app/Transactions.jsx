import React, { useState } from "react";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  const [activeFilter, setActiveFilter] = useState("received");

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
      {/* <div className="flex flex-col md:flex-row md:justify-between md:items-center"> */}
      <h1 className=" text-3xl font-extrabold text-black mb-4 mt-4">
        Transaction Overview
      </h1>

      {/* Tabs */}
      <div className="flex bg-white rounded-lg  w-72  p-1 mb-4">
        <button
          onClick={() => setActiveTab("bookings")}
          className={`px-8 py-2 rounded-lg font-medium ${
            activeTab === "bookings"
              ? "button-bg text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Bookings
        </button>
        <button
          onClick={() => setActiveTab("subscriptions")}
          className={`px-6 py-2 rounded-lg font-medium ${
            activeTab === "subscriptions"
              ? "button-bg text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Subscriptions
        </button>
      </div>


    {/* Show Received/Refund buttons only for Bookings */}
      {activeTab === "bookings" && (
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveFilter("received")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeFilter === "received"
                ? "button-bg text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Received
          </button>
          <button
            onClick={() => setActiveFilter("refund")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeFilter === "refund"
                ? "button-bg text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Refund
          </button>
        </div>
      )}


      {/* </div> */}

      {/* Table */}
    <div className="bg-white rounded-2xl shadow p-4">
  <div className="overflow-x-auto">
    <div className="text-left text-sm border-b bg-[#F9FAFA] p-2 rounded-lg ">
      {/* Table Header */}
      <div className="grid grid-cols-8 text-left bg-[#DEF5FF] rounded-lg font-medium">
        <div className="py-4 px-4 ">#</div>
        <div className="py-4 ">Name</div>
        <div className="py-4 px-4  col-span-2">Description</div>
        <div className="py-4 px-4 ">Location</div>
        <div className="py-4  ">Subscription Plan</div>
        <div className="py-4 px-4 ">Join Date</div>
        <div className="py-4 px-4 ">Status</div>
      </div>

      {/* Table Rows */}
      <div>
        {Array(10)
          .fill(users[0])  // Replace with your users array
          .map((user, index) => (
            <div
              key={index}
              className="grid grid-cols-8 border-b last:border-none text-sm font-medium text-gray-700"
            >
              <div className="py-4 px-4">{index + 1}</div>
              <div className="py-4  flex items-center gap-2">
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

export default Transactions;
