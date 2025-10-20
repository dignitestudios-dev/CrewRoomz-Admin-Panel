  import React, { useState, useEffect } from "react";
  import { useNavigate } from "react-router";
  import axios from "../../axios";  // Import your axios instance
  import { ErrorToast } from "../../components/global/Toaster"; // Your toast for errors

  const Users = () => {
    const [activeTab, setActiveTab] = useState("listers");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const UserShimmerRow = () => (
      <div className="grid grid-cols-10 border-b last:border-none animate-pulse">
        <div className="py-4 px-4">
          <div className="h-4 bg-gray-300 rounded w-4"></div>
        </div>
        <div className="py-4 col-span-2 flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>
        <div className="py-4 px-4">
          <div className="h-4 bg-gray-300 rounded w-32"></div>
        </div>
        <div className="py-4 px-28 col-span-2">
          <div className="h-4 bg-gray-300 rounded w-10"></div>
        </div>
        <div className="py-4 px-4">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>
        <div className="py-4 px-4">
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </div>
        <div className="py-4 px-4">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>
        <div className="py-4 px-4">
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
    );

    // Fetch users from API
    const fetchUsers = async (role = "lister", pageNumber = 1) => {
      setLoading(true);
      try {
        const response = await axios.get(`/admin/users`, {
          params: { role, page: pageNumber },
        });

        if (response.data.success) {
          setUsers(response.data.data.users);
        } else {
          ErrorToast(response.data.message || "Failed to fetch users");
        }
      } catch (error) {
        console.error("Fetch users error:", error);
        ErrorToast("Error fetching users. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    // Fetch users when component mounts or activeTab/page changes
    useEffect(() => {
      if (activeTab === "listers") {
        fetchUsers("lister", page);
      } else if (activeTab === "users") {
        fetchUsers("user", page); // Assuming "user" role for the other tab, adjust if needed
      }
    }, [activeTab, page]);

   const handleRowClick = (user) => {
  const { _id, name, email, profilePicture } = user;

  if (activeTab === "listers") {
    navigate(`/app/lister-details/${_id}`, {
      state: { userId: _id, name, email, profilePicture }
    });
  } else if (activeTab === "users") {
    navigate(`/app/user-details/${_id}`, {
      state: { userId: _id, name, email, profilePicture }
    });
  }
};


    return (
      <div className="p-6 pt-2 min-h-screen ">
        {/* Heading */}
        <div className="flex flex-col mt-4 md:flex-row md:justify-between md:items-center">
          <h1 className="text-[36px] font-extrabold text-black mb-4">User Management</h1>

          {/* Tabs */}
          <div className="flex bg-white rounded-lg p-1 mb-4">
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
        <div className="bg-white rounded-2xl p-4">
          <div className="overflow-x-auto">
            <div className="text-left text-sm border-b bg-[#F9FAFA] p-2 rounded-lg font-normal">
              {/* Table Header */}
              <div className="grid grid-cols-10 font-medium text-left bg-[#DEF5FF] rounded-lg">
                <div className="py-4 px-4 ">#</div>
                <div className="py-4 col-span-2">Lister Name</div>
                <div className="py-4 px-4 ">Email</div>
                <div className="py-4 px-16 col-span-2">Total Properties</div>
                <div className="py-4 px-4 ">Location</div>
                <div className="py-4  ">Subscription Plan</div>
                <div className="py-4 px-4 ">Join Date</div>
                <div className="py-4 px-4 ">Status</div>
              </div>

              {/* Table Rows */}
              <div>
                {loading ? (
                  <>
                    {Array(10).fill(0).map((_, index) => (
                      <UserShimmerRow key={index} />
                    ))}
                  </>
                ) : users.length === 0 ? (
                  <div className="text-center p-4">No users found.</div>
                ) : (
                  users.map((user, index) => (
                    <div
                      key={user._id}
                      className="grid grid-cols-10 border-b last:border-none text-sm text-gray-700 cursor-pointer"
                      onClick={() => handleRowClick(user)}
                    >
                      <div className="py-4 px-4">{index + 1}</div>
                      <div className="py-4 col-span-2 flex items-center gap-2">
                        <img
                          src={
                            user.profilePicture ||
                            "https://via.placeholder.com/40?text=No+Image"
                          }
                          alt={user.name} 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {user.name}
                      </div>
                      <div className="py-4 px-4">{user.email}</div>
                      <div className="py-4 px-28 col-span-2">{user.totalListings}</div>
                      <div className="py-4 px-4">
                        {user.city || user.state ? `${user.city || ""} ${user.state || ""}` : "-"}
                      </div>
                      <div className="py-4 px-4">
                        {user.activeSubscriptionPlan || "No Plan"}
                      </div>
                      <div className="py-4 px-4">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </div>
                      <div className="py-4 px-4">
                        <span
                          className={`px-4 py-1.5 text-xs rounded-full font-medium ${
                            user.isDeactivatedByAdmin
                              ? "bg-red-500 text-white"
                              : "bg-green-500 text-white"
                          }`}
                        >
                          {user.isDeactivatedByAdmin ? "Inactive" : "Active"}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Controls (optional) */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">Page {page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 rounded bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  export default Users;
