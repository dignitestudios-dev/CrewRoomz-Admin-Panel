import { X } from "lucide-react";
import { calendar } from "../assets/export";
import React, { useRef } from "react";


const NotificationsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const dateInputRef = useRef(null);

  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // ✅ Triggers native calendar
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-96 p-6 z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Create New Notification</h2>
          <button onClick={onClose}  className="text-[#36C0EF] bg-[#36C0EF]/20 rounded-full p-1 ">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Subscription</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

         <div className="w-full">
  <label className="block text-sm mb-1">Date</label>

  <div className="relative w-full">
      <input
        ref={dateInputRef}
        type="date"
        className="w-full pr-10 py-2 pl-3 border rounded-lg appearance-none focus:outline-none focus:ring focus:ring-blue-300"
      />
      <img
        src={calendar}
        alt="Calendar Icon"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-7 h-7 cursor-pointer"
        onClick={handleIconClick}
      />
    </div>
  </div>

          <div>
            <label className="block text-sm mb-1">Time</label>
            <input
              type="time"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              placeholder="Enter description"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              rows="3"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="w-full button-bg text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Create Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotificationsModal;
