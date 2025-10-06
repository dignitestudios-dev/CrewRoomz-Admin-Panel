import React from 'react'

const RecentSubscription = () => {

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
        <div className='p-6 pt-2 min-h-screen'>
            <div>
                <h3 className="text-[36px] font-bold pb-4 pt-4">Recent Subscriptions</h3>
            </div>
            <div className="bg-white p-6 rounded-xl overflow-auto">
               
                <div className="w-full bg-[#F9FAFA] rounded-lg p-4 ">
                    <div className="grid grid-cols-7 text-left text-sm border-b bg-[#DEF5FF] py-4 rounded-lg ">
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

                                    {/* <div className="col-span-1">{booking.userName}</div>
          <div className="col-span-2">{booking.stayDuration}</div> */}

                                </div>
                            ))}
                    </div>
                </div>

            </div>
          </div>

  )
}

export default RecentSubscription;