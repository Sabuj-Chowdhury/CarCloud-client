import { useContext, useEffect, useState } from "react";
import BookingTable from "../components/BookingTable";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/bookings/${user.email}`)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [user]);

  return (
    <div className="bg-black text-amber-400 min-h-screen p-4">
      <h1 className="text-2xl md:text-4xl font-semibold mb-6 text-center">
        My Bookings
      </h1>
      {bookings.length > 0 ? (
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
              {bookings.map((booking, idx) => (
                <BookingTable key={idx} booking={booking}></BookingTable>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            No bookings found!
          </h2>
          <p className="mb-6 text-lg">
            Looks like you haven’t made any bookings yet. Check out our
            available cars and find the perfect ride for you.
          </p>
          <Link
            to="/available-cars"
            className="bg-amber-500 text-black px-6 py-3 rounded hover:bg-amber-400 transition-all"
          >
            Explore Available Cars
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
