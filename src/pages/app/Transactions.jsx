import React, { useState, useEffect } from "react";
import axios from "../../axios"

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  const [activeFilter, setActiveFilter] = useState("received");
  const [transactions, setTransactions] = useState([]); // State to store fetched transactions
  const [loading, setLoading] = useState(false); // Loading state
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10,
  });

  // Fetch booking transactions
  const fetchTransactions = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`/admin/bookingTransactions?page=${page}`);
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

  // Fetch transactions when the component mounts
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

      {/* Tabs */}
      {/* <div className="flex bg-white rounded-lg w-72 p-1 mb-4">
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
      </div> */}

      {/* Bookings Filter Buttons */}
      {/* {activeTab === "bookings" && (
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
      )} */}

      {/* Bookings Table */}
      {activeTab === "bookings" && (
        <div className="bg-white rounded-2xl p-4">
          <div className="overflow-x-auto">
            <div className="text-left text-sm border-b bg-[#F9FAFA] p-2 rounded-lg">
              <div className="grid grid-cols-6 text-left bg-[#DEF5FF] rounded-lg font-medium">
                <div className="py-4 px-4">#</div>
                <div className="py-4">Name</div>
                <div className="py-4 px-4 ">Description</div>
                <div className="py-4 px-4">Location</div>
                <div className="py-4">Subscription Plan</div>
                <div className="py-4 px-4">Join Date</div>
                {/* <div className="py-4 px-4">Status</div> */}
              </div>

              {/* Render Fetched Transactions */}
              {loading ? (
 Array(5)
                  .fill(0)
                  .map((_, index) => <ShimmerRow key={index} />)              ) : (
                transactions.map((transaction, index) => (
                  <div
                    key={transaction._id}
                    className="grid grid-cols-6 border-b last:border-none text-sm font-medium text-gray-700"
                  >
                    <div className="py-4 px-4">{index + 1}</div>
                    <div className="py-4">{transaction.lister.name}</div>
                    <div className="py-4 px-4 ">{transaction.user.name}</div>
                    <div className="py-4 px-4">{transaction.lister.name}</div>
                    <div className="py-4 px-4">${transaction.totalPrice}</div>
                    <div className="py-4 px-4">
                      {new Date(transaction.createdAt).toLocaleDateString()}
                    </div>
                    {/* <div className="py-4 px-4">
                      <span
                        className={`px-4 py-1.5 text-xs rounded-full font-medium ${
                          transaction.totalPrice > 50
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {transaction.totalPrice > 50 ? "High" : "Low"}
                      </span>
                    </div> */}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Pagination Controls */}
          
        </div>
      )}

      <div className="flex justify-end mt-4 gap-3">
            <button
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={pagination.currentPage <= 1}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Previous
            </button>
            <div className="mt-2">
              Page {pagination.currentPage} of {pagination.totalPages}
            </div>
            <button
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={pagination.currentPage >= pagination.totalPages}
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Next
            </button>
          </div>

      {/* Subscriptions Table (unchanged) */}
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
