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
  // const modalRef = useRef(null); // Create a ref for the modal
  // const [currentCar, setCurrentCar] = useState(null);

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

  // update function
  // const handleUpdate = (e, carId) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const updatedCar = Object.fromEntries(formData.entries());
  //   console.log({ carId, updatedCar });

  //   // Close the modal after submission
  //   if (modalRef.current) {
  //     modalRef.current.close();
  //   }
  // };

  // delete function
  const handleDelete = (id) => {
    console.log(id);
  };

  if (!user) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="mx-auto p-6 bg-[#fdf4e3] rounded shadow-md">
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
                  ${car.price}/day
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
                  {/* update button */}
                  <button
                    className="mx-2 p-2 bg-[#6d4d7c] text-white rounded hover:bg-[#5a3b66]"
                    // onClick={() => {
                    //   setCurrentCar(car); // Set the current car for editing
                    //   if (modalRef.current) {
                    //     modalRef.current.showModal(); // Show the modal using ref
                    //   }
                    // }}
                  >
                    <FaEdit />
                  </button>

                  {/* delete button */}
                  <button
                    onClick={() => handleDelete(car._id)}
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

      {/* Update Modal
      {currentCar && (
        <dialog ref={modalRef} id="update_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Car Details</h3>
            <form
              onSubmit={(e) => handleUpdate(e, currentCar._id)}
              className="space-y-4"
            >
              <input
                type="text"
                name="model"
                defaultValue={currentCar.model}
                className="input input-bordered w-full"
                placeholder="Car Model"
                required
              />
              <input
                type="number"
                name="price"
                defaultValue={currentCar.price}
                className="input input-bordered w-full"
                placeholder="Daily Rental Price"
                required
              />
              <select
                name="availability"
                defaultValue={currentCar.availability}
                className="select select-bordered w-full"
                required
              >
                <option>Available</option>
                <option>Unavailable</option>
              </select>
              <input
                type="text"
                name="registrationNumber"
                defaultValue={currentCar.registrationNumber}
                className="input input-bordered w-full"
                placeholder="Vehicle Registration Number"
                required
              />
              <input
                type="text"
                name="features"
                defaultValue={currentCar.features}
                className="input input-bordered w-full"
                placeholder="Features (comma-separated)"
              />
              <textarea
                name="description"
                defaultValue={currentCar.description}
                className="textarea textarea-bordered w-full"
                placeholder="Description"
              ></textarea>
              <input
                type="url"
                name="imageUrl"
                defaultValue={currentCar.imageUrl}
                className="input input-bordered w-full"
                placeholder="Image URL"
                required
              />
              <input
                type="text"
                name="location"
                defaultValue={currentCar.location}
                className="input input-bordered w-full"
                placeholder="Location"
                required
              />
              <div className="modal-action">
                <button type="submit" className="btn btn-success">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    document.getElementById("update_modal").close()
                  }
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )} */}
    </div>
  );
};

export default MyCars;
