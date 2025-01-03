import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import LoadingSpinner from "../components/LoadingSpinner";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [selectedCarId, setSelectedCarId] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL}/car/${id}`
        );
        setCar(data);
      } catch (error) {
        toast.error("Error fetching car details:", error);
      }
    };
    fetchCarDetails();
  }, [id]);

  // get the id of the car
  const handleUpdateClick = (id) => {
    setSelectedCarId(id);
    document.getElementById("booking_modal").showModal();
  };

  if (!car) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
        <img
          src={car.imageUrl}
          alt={car.model}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-amber-400 mb-4">
            {car.model}
          </h1>
          <p className="text-lg mb-2">
            <span className="font-semibold">Price Per Day:</span> ${car.price}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Availability:</span>{" "}
            {car.availability}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Location:</span> {car.location}
          </p>
          <p className="text-lg mb-6 text-gray-300">{car.description}</p>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">
              Features:
            </h2>
            {car && (
              <ul className="list-disc list-inside text-gray-300">
                {car.features.map((feature, index) => (
                  <li key={index} className="mb-1">
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              <p>Added by: {car.owner.name}</p>
              <p>Contact: {car.owner.email}</p>
            </div>
            {/* book now button */}
            <button
              className={`px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition ${
                car.availability === "Unavailable"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => handleUpdateClick(car._id)}
              disabled={car.availability === "Unavailable"} // Disable button if unavailable
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Booking modal */}
      <BookingModal id={selectedCarId}></BookingModal>
    </div>
  );
};

export default CarDetails;
