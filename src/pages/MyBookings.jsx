import { useContext, useEffect, useState } from "react";
import BookingTable from "../components/BookingTable";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DateModal from "../components/DateModal";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LoadingSpinner from "../components/LoadingSpinner";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/bookings/${user.email}`)
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [user]);

  // cancel booking
  const handleCancel = async (id, prev, bookingStatus) => {
    try {
      await axios.patch(`${import.meta.env.VITE_URL}/booking-status/${id}`, {
        bookingStatus,
      });
      // refresh UI
      axios
        .get(`${import.meta.env.VITE_URL}/bookings/${user.email}`)
        .then((res) => {
          setBookings(res.data);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // update booking duration
  const handleDateChange = async (id, startDate, endDate) => {
    try {
      await axios.patch(`${import.meta.env.VITE_URL}/booking-dates/${id}`, {
        startDate,
        endDate,
      });
      toast.success("Booking dates updated successfully!");
      // refresh UI
      axios
        .get(`${import.meta.env.VITE_URL}/bookings/${user.email}`)
        .then((res) => {
          setBookings(res.data);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } catch (error) {
      toast.error("Failed to update booking dates.");
      console.error(error);
    }
  };

  // open modal
  const openModal = (booking) => {
    setSelectedBooking(booking);
    document.getElementById("modify_date_modal").showModal();
  };

  // Confirmation delete
  const handleCustomCancel = (id, prev, current) => {
    Swal.fire({
      title: "Are you sure you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleCancel(id, prev, current);
        Swal.fire({
          title: "Canceled!",
          text: "Your Booking has been Canceled.",
          icon: "success",
        });
      }
    });
  };

  // Calculate booking frequency by car model
  const bookingFrequency = bookings.reduce((acc, booking) => {
    const { model } = booking;
    acc[model] = (acc[model] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the chart
  const chartData = {
    labels: Object.keys(bookingFrequency), // Car models
    datasets: [
      {
        label: "Booking Frequency",
        data: Object.values(bookingFrequency), // Booking counts
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#FFC107", // Chart legend text color
        },
      },
      title: {
        display: true,
        text: "Booking Frequency by Car Model",
        color: "#FFC107",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#FFC107", // X-axis label color
        },
      },
      y: {
        ticks: {
          color: "#FFC107", // Y-axis label color
        },
        title: {
          display: true,
          text: "Number of Bookings",
          color: "#FFC107",
        },
      },
    },
  };
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="bg-black text-amber-400 min-h-screen p-4">
      <h1 className="text-2xl md:text-4xl font-semibold mb-6 text-center">
        My Bookings : {bookings.length}
      </h1>

      {bookings.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-amber-500">
              <thead>
                <tr className="bg-amber-500 text-black">
                  <th className="p-4 border border-amber-400">Car Image</th>
                  <th className="p-4 border border-amber-400">Car Model</th>
                  <th className="p-4 border border-amber-400">Booking Date</th>
                  <th className="p-4 border border-amber-400">Total Price</th>
                  <th className="p-4 border border-amber-400">
                    Booking Status
                  </th>
                  <th className="p-4 border border-amber-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, idx) => (
                  <BookingTable
                    key={idx}
                    booking={booking}
                    openModal={openModal}
                    handleCustomCancel={handleCustomCancel}
                  ></BookingTable>
                ))}
              </tbody>
            </table>
          </div>
          {/* chart */}
          <div className="mb-10 bg-white p-4 rounded">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </>
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

      {/* modal for change date */}
      <DateModal
        selectedBooking={selectedBooking}
        handleDateChange={handleDateChange}
      ></DateModal>
    </div>
  );
};

export default MyBookings;
