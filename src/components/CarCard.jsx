import { formatDistanceToNow } from "date-fns";
import toast from "react-hot-toast";

const CarCard = ({ car }) => {
  const { model, price, availability, imageUrl, dateAdded, bookingCount } =
    car || {};

  // Validate the date
  let formattedDate = "Unknown";
  if (dateAdded) {
    try {
      formattedDate = formatDistanceToNow(new Date(dateAdded), {
        addSuffix: true,
      });
    } catch (error) {
      toast.error("Invalid date format:", dateAdded, error);
    }
  }

  return (
    <div className="bg-white border border-yellow-200 rounded-xl shadow-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-2xl relative flex flex-col">
      {/* Car Image */}
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={model}
        loading="lazy"
      />

      {/* Car Details */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        {/* Model and Availability */}
        <div className="mb-2">
          <h3 className="text-lg font-bold text-gray-800">{model}</h3>
          <div className="flex justify-between items-center mt-1">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                availability === "Not Available"
                  ? "bg-red-200 text-red-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {availability}
            </span>
            <span className="text-sm text-gray-500">Added {formattedDate}</span>
          </div>
        </div>

        {/* Price and Booking Count */}
        <div className="mb-4">
          <p className="text-orange-500 text-lg font-semibold">${price}/day</p>
          <p className="text-sm text-gray-600">Bookings: {bookingCount}</p>
        </div>

        {/* Book Now Button */}
        <button
          className={`mt-auto px-4 py-2 text-sm font-bold rounded-lg shadow-md transition ${
            availability === "Not Available"
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
