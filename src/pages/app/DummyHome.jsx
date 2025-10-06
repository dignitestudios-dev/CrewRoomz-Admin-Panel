import React, { useState } from "react";
import {
  FaUsers,
  FaDollarSign,
  FaCalendarCheck,
  FaClipboardList,
} from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router";

const DummyHome = () => {
 const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/app/recent-subscription');
  };


  // Stats
  const stats = {
    totalListings: 10587,
    activeUsers: 10587,
    totalBookings: 10587,
    revenue: 1086.98,
    reportsPending: 9,
  };

  // Line Chart Data
  const lineData = [
    { name: "Jan", Users: 100, Listers: 50 },
    { name: "Feb", Users: 200, Listers: 150 },
    { name: "Mar", Users: 300, Listers: 180 },
    { name: "Apr", Users: 350, Listers: 200 },
    { name: "May", Users: 400, Listers: 250 },
    { name: "Jun", Users: 500, Listers: 300 },
    { name: "Jul", Users: 600, Listers: 400 },
    { name: "Aug", Users: 735, Listers: 500 },
    { name: "Sep", Users: 650, Listers: 480 },
    { name: "Oct", Users: 700, Listers: 520 },
    { name: "Nov", Users: 720, Listers: 540 },
    { name: "Dec", Users: 800, Listers: 600 },
  ];

  // Pie Chart Data (Google Charts format)
  const pieData = [
    ["Plan", "Revenue"],
    ["Plan 1", 2098.88],
    ["Plan 2", 2098.88],
  ];

  const pieOptions = {
  title: "Revenue by Subscription",
  titleTextStyle: {
    alignment: "start", // Aligns title to the left
    fontSize: 18,
    bold: true,
    color: "#233238",
  },
  is3D: true,
  pieStartAngle: 100,
  sliceVisibilityThreshold: 0.02,
  backgroundColor: "#F9FAFA",
  legend: {
    position: "top",
    alignment: "start", // Aligns legend to the left
    textStyle: {
      color: "#233238",
      fontSize: 14,
    },
  },
  colors: ["#FF8042", "#E040FB"],
  chartArea: {
    top: 70, // Add space so the legend + title fit
    width: "100%",
    height: "80%",
  },
};



  // Bookings
  const bookings = [
    {
      id: 1,
      bookingId: "GH465279",
      bookingType: "Monthly",
      bedType: "Bunk Bed",
      location: "Gaular, Norway",
      hostName: "Jackson John",
      userName: "Mike Smith",
      stayDuration: "21 Jul - 08 Aug, 2025",
      status: "Upcoming",
    },
  ];

  return (
    <div className="p-6 pt-2 space-y-6  h-screen">
      {/* Heading */}
      <h1 className="text-[36px] mt-4 font-extrabold text-black">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-3xl  text-left w-[209px] h-[112px]">
          <h3 className="text-gray-500 text-sm ">Total Listings</h3>
          <p className="text-4xl font-semibold mt-3">{stats.totalListings}</p>
        </div>
        <div className="bg-white p-4 rounded-3xl text-left w-[209px] h-[112px]">
          <h3 className="text-gray-500 text-sm ">Active Users</h3>
          <p className="text-4xl font-semibold mt-3">{stats.activeUsers}</p>
        </div>
        <div className="bg-white p-4 rounded-3xl  text-left w-[209px] h-[112px]">
          <h3 className="text-gray-500 text-sm ">Total Bookings</h3>
          <p className="text-4xl font-semibold mt-3">{stats.totalBookings}</p>
        </div>
        <div className="bg-white p-4 rounded-3xl  text-left w-[209px] h-[112px]">
          <h3 className="text-gray-500 text-sm ">Revenue</h3>
          <p className="text-4xl font-semibold mt-3">${stats.revenue}</p>
        </div>
        <div className="bg-white p-4 rounded-3xl  text-left w-[209px] h-[112px] ">
          <h3 className="text-gray-500 text-sm ">Reports Pending</h3>
          <p className="text-4xl font-semibold mt-3">{stats.reportsPending}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="bg-white p-4 rounded-xl ">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
          {/* Line Chart */}
          <div className="bg-[#F9FAFA] rounded-xl p-4 col-span-2">
            <h3 className="text-lg font-semibold mb-6 ">Revenue by Users</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Users" stroke="#FF7B17" strokeWidth={3} />
                <Line type="monotone" dataKey="Listers" stroke="#0088FE" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 3D Google Pie Chart */}
          <div className="bg-[#F9FAFA] p-6 rounded-xl ">
            <Chart
              chartType="PieChart"
              data={pieData}
              options={pieOptions}
              width={"100%"}
              height={"350px"}
              backgroundColor={"#F9FAFA"}
            />
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white p-6 rounded-xl  ">
        <div className="flex justify-between items-center mb-4 ">
          <h3 className="text-[24px] font-bold">Recent Subscriptions</h3>
          <button
      onClick={handleViewAll}
      className="text-blue-500 text-sm hover:underline"
    >
      View All
    </button>
        </div>
       <div className="w-full bg-[#F9FAFA] rounded-lg p-4 ">
  <div className="grid grid-cols-7 text-left text-sm border-b bg-[#DEF5FF] py-4 rounded-lg font-semibold">
    {/* Table Headers */}
    <div className="ml-4">#</div>
    <div className="col-span-1">Date</div>
    <div className="col-span-1">Transaction ID</div>
    <div className="col-span-1">Subscriber Name</div>
    <div className="col-span-1">Subscription Plan</div>
    <div className="col-span-1">Plan Duration</div>
    <div className="col-span-1">Amount Piad</div>
    {/* <div className="col-span-2">Stay Duration</div>
    <div className="col-span-1">Status</div> */}
  </div>

  <div className="grid gap-y-2">
    {/* Data Rows */}
    {Array(6)
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

          {/* <div className="col-span-1">{booking.userName}</div>
          <div className="col-span-2">{booking.stayDuration}</div> */}
          
        </div>
      ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default DummyHome;
