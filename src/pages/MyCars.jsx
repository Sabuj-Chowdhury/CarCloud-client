import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import { format } from "date-fns";
const MyCars = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
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

  if (!user) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className=" mx-auto p-6 bg-[#fdf4e3] rounded shadow-md">
      <h2 className="text-2xl text-center font-bold mb-6 text-[#4a4a48]">
        My Listed Cars
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#d9f3e5] text-[#4a4a48]">
              <th className="p-3 border">Car Image</th>
              <th className="p-3 border">Car Model</th>
              <th className="p-3 border">Daily Rental Price</th>
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
                  {car.price}
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
                  <button className="mx-2 p-2 bg-[#6d4d7c] text-white rounded hover:bg-[#5a3b66]">
                    <FaEdit />
                  </button>
                  <button className="mx-2 p-2 bg-[#d9534f] text-white rounded hover:bg-[#c9302c]">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCars;
