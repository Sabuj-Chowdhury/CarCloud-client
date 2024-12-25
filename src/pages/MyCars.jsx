import axios from "axios";
import { useContext, useEffect, useState, useCallback } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState(null);

  // Fetch data function
  const fetchCars = useCallback(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_URL}/my-cars/${user.email}`)
        .then((res) => {
          setCars(res.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  }, [user?.email]);

  useEffect(() => {
    if (user?.email) {
      fetchCars();
    }
  }, [fetchCars, user?.email]);

  // Delete function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_URL}/car/${id}`);
      fetchCars(); // Update the UI after deletion
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Confirmation delete
  const handleCustomDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your car has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleUpdateClick = (id) => {
    setSelectedCarId(id);
    document.getElementById("update_modal").showModal();
  };

  // if no user or null
  if (!user) {
    return <LoadingSpinner />;
  }

  // sorting function
  const handleSort = async (e) => {
    const selectedOption = e.target.value;
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_URL}/all-cars?sort=${selectedOption}`
      );
      setCars(data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="mx-auto p-6 bg-[#fdf4e3] rounded shadow-md">
      <h2 className="text-2xl md:text-4xl font-semibold  text-center mb-6 text-[#4a4a48]">
        My Listed Cars : {cars.length}
      </h2>
      {/* sorting  */}
      {cars.length > 0 && (
        <div className="flex items-center justify-end mb-4 space-x-2">
          <label htmlFor="sortOptions" className="text-[#4a4a48] font-semibold">
            Sort By:
          </label>
          <select
            onChange={handleSort}
            id="sortOptions"
            className="p-2 border rounded bg-white focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select</option>
            <option value="asc">Price (Lowest First)</option>
            <option value="dsc">Price (Highest First)</option>
          </select>
        </div>
      )}

      {cars.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600">
            You haven't added any cars yet.
          </p>
          <Link to="/add-car" className="text-blue-600 hover:underline">
            Add a Car
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#d9f3e5] text-[#4a4a48]">
                <th className="p-3 border">Car Image</th>
                <th className="p-3 border">Car Model</th>
                <th className="p-3 border">Daily Rental Price</th>
                <th className="p-3 border">Bookings</th>
                <th className="p-3 border">Availability</th>
                <th className="p-3 border">Date Added</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, idx) => (
                <tr key={idx} className="odd:bg-[#fef9e7] even:bg-[#fcf4e9]">
                  <td className="p-3 border text-center">
                    <img
                      src={car.imageUrl}
                      alt={car.model}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 border text-center text-[#4a4a48]">
                    {car.model}
                  </td>
                  <td className="p-3 border text-center text-[#4a4a48]">
                    ${car.price}/day
                  </td>
                  <td className="p-3 border text-center text-[#4a4a48]">
                    {car.bookingCount}
                  </td>
                  <td
                    className={`p-3 border text-center font-semibold ${
                      car.availability === "Available"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {car.availability}
                  </td>
                  <td className="p-3 border text-center text-[#4a4a48]">
                    {format(new Date(car.dateAdded), "dd/MM/yyyy")}
                  </td>
                  <td className="p-3 border text-center">
                    {/* update */}
                    <button
                      onClick={() => handleUpdateClick(car._id)}
                      className="mx-2 p-2 bg-[#6d4d7c] text-white rounded hover:bg-[#5a3b66]"
                    >
                      <FaEdit />
                    </button>
                    {/* delete */}
                    <button
                      onClick={() => handleCustomDelete(car._id)}
                      className="mx-2 p-2 bg-[#d9534f] text-white rounded hover:bg-[#c9302c]"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* update modal */}
      <Modal carId={selectedCarId} refreshCars={fetchCars} />
    </div>
  );
};

export default MyCars;
