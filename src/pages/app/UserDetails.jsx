import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

const UserDetails = () => {
  const [activeTab, setActiveTab] = useState("private");
  const [activeFilter, setActiveFilter] = useState("all");

  const user = {
    id: 1,
    name: "Mike Smith",
    email: "mikesmith.workemail@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=1",
  };

  const bookings = [
    { id: 1, status: "Ongoing", location: "Gaylar, Norway", rating: 4.5 },
    { id: 2, status: "Upcoming", location: "Gaylar, Norway", rating: 4.5 },
    { id: 3, status: "Canceled", location: "Gaylar, Norway", rating: 4.5 },
    { id: 4, status: "Completed", location: "Gaylar, Norway", rating: 4.5 },
    { id: 5, status: "Ongoing", location: "Gaylar, Norway", rating: 4.5 },
    { id: 6, status: "Active", location: "Gaylar, Norway", rating: 4.5 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-yellow-400 text-white";
      case "Upcoming":
        return "bg-sky-400 text-white";
      case "Canceled":
        return "bg-red-500 text-white";
      case "Completed":
        return "bg-green-500 text-white";
      case "Active":
        return "bg-emerald-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="p-6 min-h-screen ">
      {/* Profile Header */}
      <h1 className="text-[34px] text-black mb-2 font-semibold">Profile</h1>
      <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
        <button className="bg-[#DC1D00] text-white px-6 py-4 rounded-full font-medium hover:bg-red-700 mt-4 md:mt-0">
          Deactivate
        </button>
      </div>

      {/* Bookings Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Bookings (104)</h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 pl-2 bg-white py-1 rounded-xl w-[450px]">
          {["Private", "Multi", "Semi Private"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-10 py-2 rounded-lg font-medium ${
                activeTab === tab.toLowerCase()
                  ? "bg-sky-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["All", "On-going", "Upcoming", "Completed", "Canceled"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`px-4 py-1.5 rounded-full border text-sm ${
                  activeFilter === filter.toLowerCase()
                    ? "bg-sky-500 text-white border-sky-500"
                    : "bg-blue-100 border border-[#36C0EF] text-black hover:text-white hover:bg-[#36C0EF]"
                }`}
              >
                {filter}
              </button>
            )
          )}
          <div className="ml-auto flex gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 border rounded-full text-sm bg-white">
            Calendar  <IoCalendarOutline /> 
            </button>
            <button className="px-3 py-1.5 border rounded-full text-sm bg-white">
              All
            </button>
          </div>
        </div>

        {/* Booking Cards */}
        <div className="bg-white p-6 rounded-2xl">
        <div className="grid grid-cols-1 pl-8  sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#F9FAFA] p-2 pt-4 rounded-2xl">
          
          {bookings.map((b) => (
            <div
  key={b.id}
  className="bg-white w-[327px] h-[265px] rounded-2xl shadow-sm overflow-hidden relative"
>
  {/* Status Badge */}
  <span
    className={`absolute top-6 left-6 px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
      b.status
    )}`}
  >
    {b.status}
  </span>

  {/* Image */}
  <div className="flex justify-center mt-3 p-4 pt-0 pb-1">
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      alt={b.location}
      className="w-full h-[156px] object-cover rounded-lg"  // Adjusting max width and keeping height fixed
    />
  </div>

  {/* Info */}
  <div className="px-6 pt-0 pb-4">
    <div className="flex justify-between">
  <h3 className="font-semibold text-[16px]">{b.location}</h3>
  <div className="flex items-center gap-1 text-[14px] mt-1 ml-auto">
    <FaStar className="text-yellow-400" />
    <span>{b.rating}</span>
  </div>
</div>

    <p className="text-gray-500 text-sm flex items-center">
       456 Maple Street, Anytown, NY 12345
    </p>
    <p className="text-sm mt-2 font-medium">
      1 King Bed, 1 Private Bath
    </p>
    
  </div>
</div>

          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserDetails;
