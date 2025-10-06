import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Logo, warning } from "../../assets/export";

const ReportedIssues = () => {
  const [activeTab, setActiveTab] = useState("listers");
  const [isMarkReadModalOpen, setIsMarkReadModalOpen] = useState(false);
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);

  const users = [
    {
      id: 1,
      name: "Mike Smith",
      email: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor...",
      totalProperties: "09",
      location: "Gaular, Norway",
      subscription: "8:01 PM",
      joinDate: "12 Aug, 2025",
      status: "Inactive",
      avatar:
        "https://i.pravatar.cc/40?img=1", // placeholder avatar
    },
  ];

  const openMarkReadModal = () => {
    setIsMarkReadModalOpen(true);
  };

  const closeMarkReadModal = () => {
    setIsMarkReadModalOpen(false);
  };

  const openDeactivateModal = () => {
    setIsDeactivateModalOpen(true);
  };

  const closeDeactivateModal = () => {
    setIsDeactivateModalOpen(false);
  };

  return (
    <div className="p-6 pt-2 min-h-screen ">
      {/* Heading */}
      <div className="flex flex-col mt-4 md:flex-row md:justify-between md:items-center">
        <h1 className="text-[36px] font-extrabold text-black mb-4">
          Reported Issues
        </h1>

        {/* Tabs */}
        <div className="flex bg-white rounded-lg shadow  p-1 mb-4">
          <button
            onClick={() => setActiveTab("listers")}
            className={`px-14 py-2 rounded-lg font-medium ${
              activeTab === "listers"
                ? "button-bg text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Listers
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`px-14 py-2 rounded-lg font-medium ${
              activeTab === "users"
                ? "button-bg text-white"
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
          <div className="text-left text-sm border-b bg-[#F9FAFA] p-2 rounded-lg ">
            {/* Table Header */}
            <div className="grid grid-cols-9 text-left bg-[#DEF5FF] rounded-lg font-medium">
              <div className="py-4 px-4 ">#</div>
              <div className="py-4 px-1 ">Name</div>
              <div className="py-4 px-4 col-span-2">Reason</div>
              <div className="py-4  ">Reported By</div>
              <div className="py-4 px-4 "> Date</div>
              <div className="py-4 px-2 ">Time</div>
              <div className="py-4 px-4 ">Action</div>
            </div>

            {/* Table Rows */}
            <div>
              {Array(10)
                .fill(users[0]) // Replace with your users array
                .map((user, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-9 border-b last:border-none text-sm font-medium text-gray-700"
                  >
                    <div className="py-4 px-4">{index + 1}</div>
                    <div className="py-4">{user.name}</div>
                    <div className="py-4 px-4 col-span-2">{user.email}</div>
                    <div className="py-4 px-4">test user</div>
                    <div className="py-4 px-4">{user.joinDate}</div>
                    <div className="py-4 px-4">{user.subscription}</div>
                    <div className="py-4 px-4 text-sm col-span-2 flex text-[#2BB048]  cursor-pointer">
                      <span
                        onClick={openMarkReadModal}
                        className="text-[#2BB048] cursor-pointer font-medium hover:underline"
                      >
                        Mark as Read
                      </span>
                      <span
                        onClick={openDeactivateModal}
                        className="text-[#DC1D00] ml-2 cursor-pointer hover:underline"
                      >
                        Deactivate
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mark as Read Modal */}
{isMarkReadModalOpen && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[471px] h-[347px] flex flex-col items-center">
      {/* Warning Icon */}
 <img
        src={warning}  // Replace with your image path
        alt="Warning"
        className="w-[107px] h-[107px] mb-4"  // Adjust size (width and height) of the image
      />
      {/* Modal Title */}
      <h2 className="text-[24px] font-bold text-center mb-4 mt-4">Mark as Read</h2>

      {/* Modal Message */}
      <p className="text-center text-[16px] text-gray-700 mb-6">
        Are you sure you want to mark this issue as read?
      </p>

      {/* Action Buttons */}
      <div className="flex justify-between  w-full gap-1">
        <button
          onClick={closeMarkReadModal}
          className="px-6 py-4 bg-gray-300 w-[50%] rounded-lg font-medium text-gray-700 hover:bg-gray-400"
        >
          No
        </button>
        <button
          onClick={closeMarkReadModal}
          className="px-6 py-4 button-bg w-[50%] text-white rounded-lg font-medium hover:bg-blue-600"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
)}


      {/* Deactivate Modal */}
      {isDeactivateModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
         <div className="bg-white p-6 rounded-lg shadow-lg w-[471px] h-[347px] flex flex-col items-center">
      {/* Warning Icon */}
 <img
        src={warning}  // Replace with your image path
        alt="Warning"
        className="w-[107px] h-[107px] mb-4"  // Adjust size (width and height) of the image
      />
            <h2 className="text-[24px] font-bold mt-2 mb-4">Deactivate</h2>
            <p className="text-center text-[16px] text-gray-700 mb-6">Are you sure you want to deactivate this account?</p>



            <div className="mt-4 flex justify-end w-full">
              <button
                onClick={closeDeactivateModal}
                className="px-4 py-4 bg-gray-300 w-[50%] rounded-lg mr-2"
              >
                No
              </button>
              <button
                onClick={closeDeactivateModal}
                className="px-4 py-4 button-bg w-[50%] text-white rounded-lg"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportedIssues;
