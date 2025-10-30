import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../axios";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("multi");
  const [page, setPage] = useState(1);
  const [bookingStatus, setBookingStatus] = useState("completed");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});

  const navigate = useNavigate();

  const handleRowClick = (bookingId) => {
    navigate(`/app/bookingdetails/${bookingId}`);
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/admin/bookings?page=${page}&roomType=${activeTab}&bookingStatus=${bookingStatus}`
      );
      setBookings(response.data?.data || []);
      setPagination(response.data?.pagination || {});
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [activeTab, page, bookingStatus]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  const handleStatusChange = (e) => {
    setBookingStatus(e.target.value);
    setPage(1);
  };

  const shimmerRow = (
    <div className="grid grid-cols-9 gap-2 animate-pulse border-b py-4">
      {Array(9).fill(0).map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
      ))}
    </div>
  );

  return (
    <div className="p-6 pt-2 min-h-screen mt-4">
      <h1 className="text-[36px] font-extrabold text-black mb-4">
        Booking Management
      </h1>

      {/* Filters */}
      <div className="flex justify-between flex-wrap gap-4 items-center mb-4">
        {/* Tabs */}
        <div className="flex bg-white rounded-lg w-full md:w-[464px] p-1">
          {["multi", "semiprivate" ,"private"].map((type) => (
            <button
              key={type}
              onClick={() => handleTabChange(type)}
              className={`flex-1 py-2 rounded-lg font-medium capitalize ${
                activeTab === type
                  ? "button-bg text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {type.replace("semi", "semi ")}
            </button>
          ))}
        </div>

        {/* Booking Status Dropdown */}
        <div className="flex items-center gap-2 bg-white rounded-lg px-1 py-1">
          <select
            id="status"
            value={bookingStatus}
            onChange={handleStatusChange}
            className="rounded px-4 py-2 button-bg text-sm text-white"
          >
            <option className="text-black" value="completed">Completed</option>
            <option className="text-black" value="cancelled">Cancelled</option>
            <option className="text-black" value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl p-4">
        <div className="overflow-x-auto">
          {/* Table Header */}
          <div className="grid grid-cols-9 text-left bg-[#DEF5FF] font-medium rounded-lg text-sm">
            <div className="py-4 px-4">#</div>
            <div className="py-4">Booking ID</div>
            <div className="py-4 px-2">Booking Type</div>
            <div className="py-4 px-4">Bed Count</div>
            <div className="py-4 px-4">Location</div>
            <div className="py-4 px-2">Host Name</div>
            <div className="py-4">User Name</div>
            <div className="py-4">Stay Duration</div>
            <div className="py-4 px-4">Status</div>
          </div>

          {/* Loading Shimmer */}
          {loading ? (
            Array(10).fill(0).map((_, i) => <div key={i}>{shimmerRow}</div>)
          ) : bookings.length === 0 ? (
            <p className="p-4 text-gray-500 text-sm text-center">No bookings found.</p>
          ) : (
            bookings.map((booking, index) => (
              <div
                key={booking._id}
                className="grid grid-cols-9 border-b last:border-none text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50"
                onClick={() => handleRowClick(booking._id)}
              >
                <div className="py-4 px-4">{index + 1}</div>
                <div className="py-4 px-2">{booking._id.slice(-6)}</div>
                <div className="py-4 px-2 capitalize">{booking.roomType}</div>
                <div className="py-4 px-10">{booking.bed.length}</div>
                <div className="py-4 px-4">
                  {booking.room.city}, {booking.room.state}
                </div>
                <div className="py-4 px-2">{booking.lister.name}</div>
                <div className="py-4 px-2">{booking.user.name}</div>
                <div className="py-4 px-2">
                  {new Date(booking.startDate).toLocaleDateString()} -{" "}
                  {new Date(booking.endDate).toLocaleDateString()}
                </div>
                <div className="py-4 px-4">
                  <span
                    className={`px-4 py-1.5 text-xs rounded-full font-medium ${
                      booking.bookingStatus === "completed"
                        ? "bg-green-500 text-white"
                        : booking.bookingStatus === "pending"
                        ? "bg-yellow-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {booking.bookingStatus}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-end gap-2">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center text-sm">
          Page {pagination.currentPage || page} of {pagination.totalPages || 1}
        </span>
        <button
          onClick={() =>
            setPage((prev) =>
              pagination.totalPages && prev < pagination.totalPages
                ? prev + 1
                : prev
            )
          }
          disabled={pagination.totalPages && page >= pagination.totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Bookings;
