import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { LocationEdit } from "lucide-react";
import {
  BsFilePdf,
} from "react-icons/bs";
import {
  FaWifi,
  FaSnowflake,
  FaSwimmingPool,
  FaCoffee,
} from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import axios from "../../axios";




 
  const BookingDetailsSkeleton = () => {
  return (
    <div className="p-6 min-h-screen animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <div className="h-8 w-60 bg-gray-300 rounded-md" />
        </div>
        <div className="h-10 w-24 bg-gray-300 rounded-full" />
      </div>

      {/* Image & Details */}
      <div className="bg-white rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row gap-6 bg-[#F9FAFA] p-6 rounded-2xl">
          {/* Image */}
          <div className="w-full lg:w-[503px]">
            <div className="w-full h-[362px] bg-gray-300 rounded-xl" />
            <div className="flex gap-2 mt-3">
              {Array(4).fill(0).map((_, i) => (
                <div key={i} className="w-[120px] h-[80px] bg-gray-300 rounded-lg" />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-4 mt-6 lg:mt-0">
            <div className="h-8 w-2/3 bg-gray-300 rounded-md" />
            <div className="h-4 w-1/2 bg-gray-300 rounded-md" />
            <div className="h-4 w-40 bg-gray-300 rounded-md" />

            {/* Amenities */}
            <div className="space-y-2 mt-4">
              <div className="h-4 w-24 bg-gray-300 rounded-md" />
              <div className="flex gap-4 flex-wrap">
                {Array(5).fill(0).map((_, i) => (
                  <div key={i} className="w-[84px] h-[72px] bg-gray-200 rounded-xl" />
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 mt-4">
              <div className="h-4 w-32 bg-gray-300 rounded-md" />
              <div className="h-4 w-full bg-gray-200 rounded-md" />
              <div className="h-4 w-5/6 bg-gray-200 rounded-md" />
            </div>

            {/* Rules */}
            <div className="space-y-2 mt-4">
              <div className="h-4 w-24 bg-gray-300 rounded-md" />
              <div className="w-[461px] h-[52px] bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Bed Types, Host, Guest */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-2xl p-6 space-y-3">
          <div className="h-4 w-48 bg-gray-300 rounded-md" />
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded-xl" />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 space-y-3">
          <div className="h-4 w-48 bg-gray-300 rounded-md" />
          <div className="h-16 bg-gray-200 rounded-xl" />
          <div className="h-16 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

const RoomDetails = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleBack = () => navigate(-1);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`/admin/room/${bookingId}`);
        setRoomData(response.data.data.room); // ✅ extract room
      } catch (error) {
        console.error("Failed to fetch room details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [bookingId]);

  if (loading) {
    return <BookingDetailsSkeleton />;
  }

  if (!roomData) {
    return <div className="p-6 text-center text-red-500">Failed to load room details.</div>;
  }

  const amenitiesIcons = {
    "Wi-fi": <FaWifi />,
    "Air - Conditioning": <FaSnowflake />,
    "Pool": <FaSwimmingPool />,
    "Breakfast": <FaCoffee />,
    // Add more custom icons as needed
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <button onClick={handleBack} className="pb-1 mr-1 font-bold text-black">
            <FaArrowLeft size={28} />
          </button>
          <h1 className="text-[36px] text-black mb-2 font-bold">Property Details</h1>
        </div>
        <span className="text-sm font-semibold px-6 py-3 rounded-full bg-green-500 text-white capitalize">
          {roomData.roomStatus}
        </span>
      </div>

      {/* Main Room Content */}
      <div className="bg-white rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row gap-6 bg-[#F9FAFA] p-6 rounded-2xl">
          {/* Room Images */}
          <div className="w-full lg:w-[503px]">
            <img
              src={roomData.media?.[0]}
              alt="Room"
              className="rounded-xl w-full h-[362px] object-cover"
            />
            <div className="flex gap-2 mt-3">
              {(roomData.media || []).slice(0, 4).map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`thumb-${idx}`}
                  className="w-[120px] h-[80px] object-cover rounded-lg border cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Room Info */}
          <div className="flex-1">
            <h2 className="text-[32px] font-bold text-gray-800">
              {roomData.city}, {roomData.state}
            </h2>
            <p className="text-gray-600 text-sm flex items-center mt-1">
              <LocationEdit /> <span className="ml-2">{roomData.address}</span>
            </p>
            <a
              href={`https://maps.google.com/?q=${roomData.address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm underline flex mt-1"
            >
              <LocationEdit className="mr-2" />
              Show on Google Maps
            </a>

            <p className="text-sm text-gray-700 mt-2">
              {roomData.bedDetails?.length || 0} Bed
              {roomData.bedDetails?.length > 1 ? "s" : ""},{" "}
              {roomData.privateBath ? "Private Bath" : "Shared Bath"}
            </p>

            {/* Amenities */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 text-[16px]">Amenities</h3>
                <h3 className="text-[#36C0EF] hover:underline cursor-pointer">View all</h3>
              </div>
              <div className="flex gap-4 mt-2 flex-wrap">
                {(roomData.amenities || []).slice(0, 6).map((a, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-sm text-gray-600 w-[84px] rounded-xl bg-white p-4"
                  >
                    {amenitiesIcons[a] || <FaWifi />}
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Description</h3>
              <p className="text-[16px] text-gray-600 mt-1">{roomData.description}</p>
            </div>

            {/* Rules */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Rules to Live</h3>
              <a
                href={roomData.rulesDocument}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-1 text-sm text-gray-700 bg-white w-[461px] h-[52px] p-4 rounded-lg"
              >
                <BsFilePdf className="text-[#A51600] text-3xl" /> View Rules PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bed Type and Host Info */}
      <div className="bg-white rounded-2xl p-4 mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {/* Bed Types */}
        <div className="bg-[#F9FAFA] rounded-2xl p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Bed Type and Prices</h3>
          {(roomData.bedDetails || []).map((b, i) => (
            <div key={i} className="flex justify-between bg-white  p-4 rounded-xl mb-2">
              <span className="text-sm text-gray-700 capitalize">{b.type}</span>
              <span className="text-[#24A3FF] font-semibold">${b.price} / night</span>
            </div>
          ))}
        </div>

        {/* Host Info */}
        <div className="bg-[#F9FAFA] rounded-2xl p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Host Details</h3>
          <div className="bg-[#29ABE20A] p-4 rounded-xl">
            <div className="flex items-center gap-4">
              <img
                src={roomData.lister?.profilePicture}
                alt="Host"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{roomData.lister?.name}</h4>
                <p className="text-sm text-gray-600">Host</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


export default RoomDetails;
