import React, { useEffect, useState } from 'react';
import axios from "../../axios"; // Adjust the path if needed
import moment from 'moment';

const RecentSubscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch subscriptions data based on the current page
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get(`/admin/subscriptions?page=${currentPage}`);
        if (response.data.success) {
          setSubscriptions(response.data.data.subscriptions);
          setTotalPages(response.data.data.pagination.totalPages);
        } else {
          setError('Failed to fetch subscriptions.');
        }
      } catch (err) {
        console.error(err);
        setError('Something went wrong while fetching subscriptions.');
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, [currentPage]); // Re-fetch when currentPage changes

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='p-6 pt-2 min-h-screen'>
      <div>
        <h3 className="text-[36px] font-bold pb-4 pt-4">Recent Subscriptions</h3>
      </div>

      <div className="bg-white p-6 rounded-xl overflow-auto">
        <div className="w-full bg-[#F9FAFA] rounded-lg p-4">
          {/* Table Headers */}
          <div className="grid grid-cols-7 text-left text-sm border-b bg-[#DEF5FF] py-4 rounded-lg font-semibold">
            <div className="ml-4">#</div>
            <div className="col-span-1">Date</div>
            <div className="col-span-1">Transaction ID</div>
            <div className="col-span-1">Subscriber Name</div>
            <div className="col-span-1">Subscription Plan</div>
            <div className="col-span-1">Plan Duration</div>
            <div className="col-span-1">Amount Paid</div>
          </div>

          {loading ? (
            <p className="p-4 text-sm">Loading...</p>
          ) : error ? (
            <p className="p-4 text-red-500 text-sm">{error}</p>
          ) : (
            <div className="grid gap-y-2">
              {subscriptions.map((sub, idx) => (
                <div key={sub._id} className="grid grid-cols-7 items-center border-b py-6 text-sm">
                  <div className="ml-4 col-span-1">{(currentPage - 1) * 10 + idx + 1}</div>
                  <div className="col-span-1">{moment(sub.createdAt).format('DD, MMM YYYY')}</div>
                  <div className="col-span-1">{sub._id.slice(-8).toUpperCase()}</div>
                  <div className="col-span-1">{sub.user?.name || 'N/A'}</div>
                  <div className="col-span-1">{sub.productId.replace(/_/g, ' ')}</div>
                  <div className="col-span-1">{sub.subscriptionPlan}</div>
                  <div className="col-span-1">${sub.subscriptionPrice.toFixed(2)}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-200 text-gray-600 px-4 py-2 mx-2 rounded-md"
          >
            Previous
          </button>
          
          {/* Page Numbers */}
          <span className="text-lg font-semibold">{currentPage} of {totalPages}</span>
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-200 text-gray-600 px-4 py-2 mx-2 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentSubscription;
