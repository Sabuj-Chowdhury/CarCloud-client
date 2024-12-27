import { useContext, useEffect, useRef, useState } from "react";

import AuthContext from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const Modal = ({ carId, refreshCars }) => {
  const [car, setCar] = useState({});
  const { user } = useContext(AuthContext);
  const formRef = useRef(); // Create a ref for the form

  useEffect(() => {
    if (carId) {
      axios
        .get(`${import.meta.env.VITE_URL}/car/${carId}`)
        .then((res) => {
          setCar(res.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  }, [carId]);

  // Reset the form
  const handleReset = () => {
    const form = formRef.current;
    form.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { price, ...newCar } = initialData;
    newCar.features = newCar.features.split(",");
    newCar.owner = {
      email: user?.email,
      name: user?.displayName || {},
    };
    newCar.dateAdded = new Date();
    newCar.bookingStatus = car.bookingStatus;
    newCar.bookingCount = car.bookingCount;
    newCar.price = parseInt(price);

    try {
      // Post request
      await axios.put(`${import.meta.env.VITE_URL}/update/${carId}`, newCar);
      // Reset form
      handleReset();
      // Show toast
      toast.success("Data Updated Successfully!!!");
      // Close modal after success
      document.getElementById("update_modal").close();
      // Refresh the car list in the parent component
      refreshCars();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <dialog id="update_modal" className="modal">
      <div className="modal-box bg-black text-yellow-400">
        <h3 className="font-bold text-xl mb-4">Update Car Details</h3>
        {car && (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="model"
              defaultValue={car?.model}
              className="input input-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Car Model"
              required
            />
            <input
              type="number"
              name="price"
              defaultValue={car?.price}
              className="input input-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Daily Rental Price"
              required
            />
            <select
              name="availability"
              defaultValue={car?.availability}
              className="select select-bordered w-full bg-gray-800 text-yellow-400"
              required
            >
              <option className="bg-black text-yellow-400">Available</option>
              <option className="bg-black text-yellow-400">Unavailable</option>
            </select>
            <input
              type="text"
              name="registrationNumber"
              defaultValue={car.registrationNumber}
              className="input input-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Vehicle Registration Number"
              required
            />
            <input
              type="text"
              name="features"
              defaultValue={car.features}
              className="input input-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Features (comma-separated)"
            />
            <textarea
              name="description"
              defaultValue={car.description}
              className="textarea textarea-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Description"
            ></textarea>
            <input
              type="url"
              name="imageUrl"
              defaultValue={car.imageUrl}
              className="input input-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Image URL"
              required
            />
            <input
              type="text"
              name="location"
              defaultValue={car.location}
              className="input input-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Location"
              required
            />
            <div className="modal-action">
              <button
                type="submit"
                className="btn bg-yellow-400 text-black hover:bg-yellow-500"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="btn bg-gray-600 text-white hover:bg-gray-700"
                onClick={() => document.getElementById("update_modal").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
};

export default Modal;
