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
      avatar: "https://i.pravatar.cc/40?img=1",
    },
  ];

  const bookings = [
    {
      id: 1,
      bookingId: "GH465279",
      bookingType: "Monthly",
      bedType: "Bunk Bed",
      location: "Gaular, Norway",
      hostName: "Jackson John",
      userName: "Mike Smith",
      stayDuration: "21 Jul - 08 Aug, 2025",
      status: "Upcoming",
    },
  ];

  return (
    <div className="p-6 pt-2 min-h-screen">
      <h1 className="text-[36px] font-extrabold text-black mb-4 mt-4">
        Transaction Overview
      </h1>

      {/* Tabs */}
      <div className="flex bg-white rounded-lg w-72 p-1 mb-4">
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

      {/* Bookings Filter Buttons */}
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

      {/* Bookings Table */}
      {activeTab === "bookings" && (
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="overflow-x-auto">
            <div className="text-left text-sm border-b bg-[#F9FAFA] p-2 rounded-lg">
              <div className="grid grid-cols-8 text-left bg-[#DEF5FF] rounded-lg font-medium">
                <div className="py-4 px-4">#</div>
                <div className="py-4">Name</div>
                <div className="py-4 px-4 col-span-2">Description</div>
                <div className="py-4 px-4">Location</div>
                <div className="py-4">Subscription Plan</div>
                <div className="py-4 px-4">Join Date</div>
                <div className="py-4 px-4">Status</div>
              </div>

              <div>
                {Array(10)
                  .fill(users[0])
                  .map((user, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-8 border-b last:border-none text-sm font-medium text-gray-700"
                    >
                      <div className="py-4 px-4">{index + 1}</div>
                      <div className="py-4">{user.name}</div>
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
      )}

      {/* Subscriptions Table */}
      {activeTab === "subscriptions" && (
        <div className="bg-white p-6 rounded-xl overflow-auto">
          <div className="w-full bg-[#F9FAFA] rounded-lg p-4">
            <div className="grid grid-cols-7 text-left text-sm border-b bg-[#DEF5FF] py-4 rounded-lg">
              <div className="ml-4">#</div>
              <div className="col-span-1">Date</div>
              <div className="col-span-1">Transaction ID</div>
              <div className="col-span-1">Subscriber Name</div>
              <div className="col-span-1">Subscription Plan</div>
              <div className="col-span-1">Plan Duration</div>
              <div className="col-span-1">Amount Paid</div>
            </div>

            <div className="grid gap-y-2">
              {Array(10)
                .fill(bookings[0])
                .map((booking, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-7 items-center border-b py-6"
                  >
                    <div className="ml-4 col-span-1">{idx + 1}</div>
                    <div className="col-span-1">12, Dec 2025</div>
                    <div className="col-span-1">GH478961</div>
                    <div className="col-span-1">Mike Smith</div>
                    <div className="col-span-1">Basic Plan</div>
                    <div className="col-span-1">1 Month</div>
                    <div className="col-span-1">$9784</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
