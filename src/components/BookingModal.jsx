import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ id }) => {
  const [car, setCar] = useState({});
  const { user } = useContext(AuthContext);
  const formRef = useRef(); // Create a ref for the form
  const [startDate, setStartDate] = useState(null); // State for start date
  const [endDate, setEndDate] = useState(null); // State for end date
  const [dateError, setDateError] = useState(""); // State for date validation error

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_URL}/car/${id}`)
        .then((res) => {
          setCar(res.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (endDate < startDate) {
      setDateError("End date must be after the start date.");
      return;
    }

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { ...newCar } = initialData;
    newCar.features = newCar.features.split(",");
    newCar.customer = {
      email: user?.email,
      name: user?.displayName || {},
    };
    newCar.owner = car?.owner.email;
    newCar.carID = car?._id;
    newCar.bookedAt = new Date();
    newCar.startDate = startDate;
    newCar.endDate = endDate;

    // console.log(newCar);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/add-booking`,
        newCar
      );
      console.log(data);

      toast.success("Booked Successfully!");
      navigate("/my-bookings");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <dialog id="booking_modal" className="modal">
      <div className="modal-box bg-black text-yellow-400">
        <h3 className="font-bold text-xl mb-4">Booking Car Details</h3>
        {car && (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="model"
              defaultValue={car?.model}
              className="input input-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Car Model"
              readOnly
            />
            <input
              type="number"
              name="price"
              defaultValue={car?.price}
              className="input input-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Daily Rental Price"
              readOnly
            />
            <select
              name="availability"
              defaultValue={car?.availability}
              className="select select-bordered w-full bg-gray-800 text-yellow-400"
              readOnly
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
              readOnly
            />
            <input
              type="text"
              name="features"
              defaultValue={car.features}
              className="input input-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Features (comma-separated)"
              readOnly
            />
            <textarea
              name="description"
              defaultValue={car.description}
              className="textarea textarea-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Description"
              readOnly
            ></textarea>
            <input
              type="url"
              name="imageUrl"
              defaultValue={car.imageUrl}
              className="input input-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Image URL"
              readOnly
            />
            <input
              type="text"
              name="location"
              defaultValue={car.location}
              className="input input-bordered w-full bg-gray-800 text-yellow-400"
              placeholder="Location"
              readOnly
            />

            {/* Journey Duration Field */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <label className="text-yellow-400 md:w-1/4">
                  Journey Start Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setDateError(""); // Reset error on date change
                  }}
                  className="input input-bordered w-full md:w-3/4 bg-gray-800 text-yellow-400"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select start date"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <label className="text-yellow-400 md:w-1/4">
                  Journey End Date
                </label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                    setDateError(""); // Reset error on date change
                  }}
                  className="input input-bordered w-full md:w-3/4 bg-gray-800 text-yellow-400"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select end date"
                  required
                />
              </div>
              {dateError && (
                <p className="text-red-500 text-sm mt-2">{dateError}</p>
              )}
            </div>

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
                onClick={() => document.getElementById("booking_modal").close()}
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

export default BookingModal;
