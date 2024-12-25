import { FaTrashAlt } from "react-icons/fa";

const MyBookings = () => {
  return (
    <div className="bg-black text-amber-400 min-h-screen p-4">
      <h1 className="text-2xl md:text-4xl font-semibold mb-6 text-center">
        My Bookings
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-amber-500">
          <thead>
            <tr className="bg-amber-500 text-black">
              <th className="p-4 border border-amber-400">Car Image</th>
              <th className="p-4 border border-amber-400">Car Model</th>
              <th className="p-4 border border-amber-400">Booking Date</th>
              <th className="p-4 border border-amber-400">Total Price</th>
              <th className="p-4 border border-amber-400">Booking Status</th>
              <th className="p-4 border border-amber-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="hover:bg-amber-500 hover:text-black transition-all">
              <td className="p-4 border border-amber-400">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Car Thumbnail"
                  className="w-20 h-20 object-cover mx-auto"
                />
              </td>
              <td className="p-4 border border-amber-400">
                Toyota Corolla 2023
              </td>
              <td className="p-4 border border-amber-400">25-12-2024 14:00</td>
              <td className="p-4 border border-amber-400">$350</td>
              <td className="p-4 border border-amber-400">
                <span className="bg-green-500 text-black px-2 py-1 rounded-full">
                  Confirmed
                </span>
              </td>
              <td className="p-4 border border-amber-400 flex justify-center gap-4">
                <button className="bg-blue-500 text-black px-3 py-2 rounded hover:bg-blue-400 transition-all">
                  Modify Date
                </button>
                <button className="bg-red-500 text-black px-3 py-2 rounded flex items-center gap-2 hover:bg-red-400 transition-all">
                  <FaTrashAlt /> Cancel
                </button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
