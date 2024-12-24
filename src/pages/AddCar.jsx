import { useContext, useRef } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const formRef = useRef(); // Create a ref for the form
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // for reset the form
  const handleReset = () => {
    const form = formRef.current;
    form.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);
    const { ...newCar } = initialData;
    newCar.features = newCar.features.split(",");
    newCar.owner = {
      email: user?.email,
      name: user?.displayName || {},
    };
    newCar.dateAdded = new Date().toISOString();
    newCar.bookingStatus = "open"; //default status
    newCar.bookingCount = 0; // default count
    // console.log(newCar);
    try {
      //  post request
      await axios.post(`${import.meta.env.VITE_URL}/add-car`, newCar);
      //  Reset form
      handleReset();
      //  Show toast and navigate
      toast.success("Data Added Successfully!!!");
      navigate("/my-cars");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f3ec] rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#4a4a48]">Add Car</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-[#4a4a48]">Car Model</label>
          <input
            type="text"
            name="model"
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#4a4a48]">Daily Rental Price</label>
          <input
            type="number"
            name="price"
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#4a4a48]">Availability</label>
          <select
            name="availability"
            className="w-full mt-2 p-2 border rounded"
          >
            <option>Available</option>
            <option>Not Available</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-[#4a4a48]">
            Vehicle Registration Number
          </label>
          <input
            type="text"
            name="registrationNumber"
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#4a4a48]">
            Features (comma-separated)
          </label>
          <input
            type="text"
            name="features"
            className="w-full mt-2 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#4a4a48]">Description</label>
          <textarea
            name="description"
            className="w-full mt-2 p-2 border rounded"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-[#4a4a48]">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#4a4a48]">Location</label>
          <input
            type="text"
            name="location"
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#121213] text-white py-2 px-4 rounded hover:bg-[#6d4d7c]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCar;
