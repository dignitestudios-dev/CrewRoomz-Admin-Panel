import { LocationEdit } from "lucide-react";
import React from "react";
import { BsFilePdf } from "react-icons/bs";
import { FaWifi, FaSnowflake, FaSwimmingPool, FaCoffee, FaClipboardList } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const BookingDetails = () => {
  return (
    <div className="p-6 min-h-screen ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[36px] font-bold text-gray-800">Booking Detail</h1>
        <span className=" text-sm font-semibold bg-[#DC1D00] text-white px-4 py-3 rounded-full">
          Canceled
        </span>
      </div>

      {/* Main Content */}
      <div className=" rounded-2xl ">
        
        <div className="bg-white rounded-2xl p-6"> 
        {/* Image + Details */}
        <div className="flex flex-col lg:flex-row gap-6 bg-[#F9FAFA] p-6 rounded-2xl">
          {/* Main Image */}
          <div className="w-[503px]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Room"
              className="rounded-xl w-full h-[362px] object-cover"
            />
            {/* Thumbnails */}
            <div className="flex gap-2 mt-3 ">
              {Array(4)
                .fill("https://images.unsplash.com/photo-1600585154340-be6161a56a0c")
                .map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`thumb-${idx}`}
                    className="w-[120px] h-[80px] object-cover rounded-lg border cursor-pointer"
                  />
                ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 w-[489px]">
            <h2 className="text-[32px] font-bold text-gray-800">Gaular, Norway</h2>
            <p className="text-gray-600 text-sm flex items-center mt-1">
            <LocationEdit/> <span className="ml-2"> 456 Maple Street, Anytown, NY 12345</span> 
            </p>
            <a href="#" className="text-blue-500 text-sm underline flex mt-1">
              <LocationEdit className="mr-2"/> Show on Google Maps
            </a>

            <p className="text-sm text-gray-700 mt-2 ">
              1 King Bed, 1 Private Bath
            </p>

            {/* Amenities */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800 text-[16px]">Amenities</h3>
              <h3 className="text-[#36C0EF] hover:underline cursor-pointer">View all</h3>
              </div>
              <div className="flex gap-4 mt-2 flex-wrap">
                <div className="flex flex-col w-[84px] rounded-xl bg-white p-4 items-center text-sm text-gray-600">
                  <FaWifi className="text-xl text-[#24A3FF]" />
                  Wi-Fi
                </div>
                <div className="flex flex-col items-center text-sm text-gray-600  w-[84px] rounded-xl bg-white p-4">
                  <FaSnowflake className="text-xl text-[#24A3FF]" />
                  AC
                </div>
                <div className="flex flex-col items-center text-sm text-gray-600  w-[84px] rounded-xl bg-white p-4">
                  <FaSwimmingPool className="text-xl text-[#24A3FF]" />
                  Pool
                </div>
                <div className="flex flex-col items-center text-sm text-gray-600  w-[84px] rounded-xl bg-white p-4">
                  <FaCoffee className="text-xl text-[#24A3FF]" />
                  Breakfast
                </div>
                  <div className="flex flex-col items-center text-sm text-gray-600  w-[84px] rounded-xl bg-white p-4">
                  <FaSwimmingPool className="text-xl text-[#24A3FF]" />
                  Pool
                </div>
              </div>

            {/* Description */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Description</h3>
              <p className="text-[16px] text-gray-600 mt-1">
                Experience flexible and budget-friendly accommodation with our Hot Beds.
                Enjoy fresh linens, secure lockers, and high-speed WiFi in a well-maintained room.
              </p>
            </div>

            {/* Rules */}
            <div className="mt-4  ">
              <h3 className="font-semibold text-gray-800">Rules to Live</h3>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-700 bg-white w-[461px] h-[52px] p-4   rounded-lg">
                <BsFilePdf className="text-[#A51600] text-3xl" /> Rules
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      

      {/* Bed Type and Prices + Cancellation Reason */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-6 p-2 bg-white rounded-2xl">
        {/* Bed Types */}
        <div className=" p-6  ">
        <div className="bg-[#F9FAFA] p-6 rounded-2xl">
          <h3 className="font-semibold text-gray-800 mb-2">Bed Type And Prices</h3>
          <span className="text-gray-700 text-[13px] font-semibold">King Bed</span>

          <div className="flex  items-center  rounded-lg mt-2">

          <div className="flex w-[50%] bg-[#24A3FF] justify-between items-center  p-3 rounded-2xl mr-1">
            <span className="text-white">King Bed</span>
            <span className=" text-white px-4 font-semibold py-1 rounded-full">$50</span>
          </div>
          <div className="flex w-[50%] bg-white justify-between items-center  p-3 rounded-2xl">
            <span className="text-black">Daily</span>
            <span className=" text-[#24A3FF] font-semibold px-4 py-1 rounded-full">$50</span>
          </div>
          </div>
        </div>
        <div className="bg-[#F9FAFA]  p-6 mt-6  rounded-2xl">
                  <h3 className="font-semibold text-gray-800 mb-4">Host and Guest Details</h3>

        <div className="bg-[#29ABE20A] p-6  rounded-2xl ">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/60?img=1"
            alt="host"
            className="w-12 h-12 rounded-full"
          />
          <div className="">
            <h4 className="font-semibold text-gray-800">Mike Smith</h4>
            <p className="text-sm text-gray-600">Host</p>
          </div>
        </div>
      </div>
        </div>
        </div>

        {/* Cancellation Reason */}
        <div className="bg-[#F9FAFA] p-6 w-[526px] h-[380px] mt-5 rounded-2xl">
          <h3 className="font-semibold text-gray-800 mb-2">Cancellation Reason</h3>
          <p className="text-sm text-gray-600">
            The Selected Appointment Time Is No Longer Available Due To An Overlap.
          </p>
        </div>
      </div>

      {/* Host and Guest Details */}
    
    </div>
    </div>
  );
};

export default BookingDetails;
