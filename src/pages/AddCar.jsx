import { useContext, useRef } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const formRef = useRef(); // Create a ref for the form
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Function to reset the form
  const handleReset = () => {
    const form = formRef.current;
    form.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { ...newCar } = initialData;

    newCar.features = newCar.features
      .split(",")
      .map((feature) => feature.trim());
    newCar.owner = {
      email: user?.email,
      name: user?.displayName || {},
    };
    newCar.dateAdded = new Date().toISOString();
    newCar.bookingStatus = "pending"; // Default status
    newCar.bookingCount = 0; // Default count

    try {
      // Post request to add car
      await axios.post(`${import.meta.env.VITE_URL}/add-car`, newCar);
      // Reset form
      handleReset();
      // Show toast and navigate
      toast.success("Car added successfully!");
      navigate("/my-cars");
    } catch (err) {
      // Handle errors gracefully
      toast.error(
        err.response?.data?.message || "Error adding car. Please try again."
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Car</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Car Model</label>
          <input
            type="text"
            name="model"
            className="w-full mt-2 p-2 border border-gray-600 rounded bg-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">
            Daily Rental Price
          </label>
          <input
            type="number"
            name="price"
            className="w-full mt-2 p-2 border border-gray-600 rounded bg-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Availability</label>
          <select
            name="availability"
            className="w-full mt-2 p-2 border border-gray-600 rounded bg-gray-700"
          >
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">
            Vehicle Registration Number
          </label>
          <input
            type="text"
            name="registrationNumber"
            className="w-full mt-2 p-2 border border-gray-600 rounded bg-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">
            Features (comma-separated)
          </label>
          <input
            type="text"
            name="features"
            className="w-full mt-2 p-2 border border-gray-600 rounded bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            className="w-full mt-2 p-2 border border-gray-600 rounded bg-gray-700"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            className="w-full mt-2 p-2 border border-gray-600 rounded bg-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            className="w-full mt-2 p-2 border border-gray-600 rounded bg-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCar;
