import React, { useState, useEffect } from "react";
import axios from "../../axios";
import RecentSubscription from "./RecentSubscription";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import styles for the datepicker
import RecentSubscriptionTable from "../../components/RecentSubscriptionTable";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  const [transactions, setTransactions] = useState([]); // State to store fetched transactions
  const [loading, setLoading] = useState(false); // Loading state
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10,
  });

  const [startDate, setStartDate] = useState(null); // State for start date
  const [endDate, setEndDate] = useState(null); // State for end date

  // Fetch booking transactions with optional date filter
  const fetchTransactions = async (page = 1) => {
    setLoading(true);
    try {
      // Prepare query parameters with date filter if dates are provided
      let query = `/admin/bookingTransactions?page=${page}`;
      if (startDate) query += `&startDate=${startDate.toISOString().split('T')[0]}`; // Format to 'yyyy-mm-dd'
      if (endDate) query += `&endDate=${endDate.toISOString().split('T')[0]}`; // Format to 'yyyy-mm-dd'

      const response = await axios.get(query);
      if (response.data.success) {
        setTransactions(response.data.data.transactions);
        setPagination(response.data.data.pagination);
      } else {
        console.error("Failed to fetch transactions");
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch transactions when the component mounts or pagination changes
  useEffect(() => {
    fetchTransactions(pagination.currentPage);
  }, [pagination.currentPage]);

  // Handle page change (for pagination)
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({
        ...prev,
        currentPage: newPage,
      }));
    }
  };

  // Handle date change for start and end dates
  const handleDateChange = () => {
    setPagination((prev) => ({
      ...prev,
      currentPage: 1, // Reset to page 1 when a new date filter is applied
    }));
    fetchTransactions(1); // Fetch transactions with the new date filter
  };

  const ShimmerRow = () => (
    <div className="grid grid-cols-6 border-b last:border-none animate-pulse gap-4 space-y-4">
      <div className="py-4 px-4 bg-gray-300 h-4 rounded mt-4"></div>
      <div className="py-4 px-4 bg-gray-300 h-4 rounded"></div>
      <div className="py-4 px-4 col-span-2 bg-gray-300 h-4 rounded"></div>
      <div className="py-4 px-4 bg-gray-300 h-4 rounded"></div>
      <div className="py-4 px-4 bg-gray-300 h-4 rounded"></div>
    </div>
  );

  return (
    <div className="p-6 pt-2 min-h-screen">
      <h1 className="text-[36px] font-extrabold text-black mb-4 mt-4">
        Transaction Overview
      </h1>

      {/* Flex container for tabs and date picker */}
      <div className="flex justify-between items-center mb-6">
        {/* Tabs for Bookings and Subscriptions */}
        <div className="flex bg-white rounded-lg w-72 p-1">
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

       {/* Date Picker Filter (justified to the right) */}
{/* Date Picker Filter (justified to the right) */}
{activeTab === "bookings" && (
  <div className="flex items-center justify-end space-x-6 w-full">
    {/* Start Date */}
    <div className="flex flex-col w-56">
      <label className="text-sm font-semibold text-gray-700 mb-2">Start Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy-MM-dd"
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        placeholderText="Select start date"
      />
    </div>

    {/* End Date */}
    <div className="flex flex-col w-56">
      <label className="text-sm font-semibold text-gray-700 mb-2">End Date</label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        dateFormat="yyyy-MM-dd"
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        placeholderText="Select end date"
        minDate={startDate}
      />
    </div>

    {/* Apply Button */}
    <button
      onClick={handleDateChange}
      className="px-6 mt-6 py-2 button-bg text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Apply Filter
    </button>
  </div>
)}


      </div>

      {/* Conditionally render the content */}
      {activeTab === "bookings" && (
        <div className="bg-white rounded-2xl p-4">
          <div className="overflow-x-auto">
            <div className="text-left text-sm border-b bg-[#F9FAFA] p-2 rounded-lg">
              <div className="grid grid-cols-7 text-left bg-[#DEF5FF] rounded-lg font-medium">
  <div className="py-4 px-4">#</div>
  <div className="py-4">Lister Name</div>
  <div className="py-4 px-4">User Name</div>
  <div className="py-4 px-4">Total Price</div>
  <div className="py-4 px-4">Platform Fee</div>
  <div className="py-4 px-4">Admin Commission</div>
  <div className="py-4 px-4">Join Date</div>
</div>


              {/* Render Fetched Transactions */}
              {/* Render Fetched Transactions */}
{loading ? (
  Array(5)
    .fill(0)
    .map((_, index) => <ShimmerRow key={index} />)
) : (
  transactions.map((transaction, index) => (
    <div
      key={transaction._id}
      className="grid grid-cols-7 border-b last:border-none text-sm font-medium text-gray-700"
    >
      <div className="py-4 px-4">{index + 1}</div>
      <div className="py-4">{transaction.lister.name}</div>
      <div className="py-4 px-8">{transaction.user.name}</div>
      <div className="py-4 px-8">${transaction.totalPrice}</div>
      <div className="py-4 px-8">${transaction.platformFee}</div>
      <div className="py-4 px-8">{transaction.adminCommission}% (${transaction.adminCommissionAmount})</div>
      <div className="py-4 px-4">
        {new Date(transaction.createdAt).toLocaleDateString()}
      </div>
    </div>
  ))
)}

            </div>
          </div>
        </div>
      )}

      {/* Render the RecentSubscription component when "Subscriptions" tab is active */}
      {activeTab === "subscriptions" && <RecentSubscriptionTable />}
    </div>
  );
};

export default Transactions;
