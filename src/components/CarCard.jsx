import { formatDistanceToNow } from "date-fns";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  const { model, price, availability, imageUrl, dateAdded, bookingCount, _id } =
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
    <div className="bg-black border-none  rounded-xl shadow-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-2xl relative flex flex-col">
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
          <h3 className="text-xl font-semibold text-yellow-400">{model}</h3>
          <div className="flex justify-between items-center mt-1">
            <span
              className={`px-3 py-1 text-xs font-bold rounded-full ${
                availability === "Unavailable"
                  ? "bg-red-600 text-white"
                  : "bg-green-600 text-white"
              }`}
            >
              {availability}
            </span>
            <span className="text-sm text-gray-300">Added {formattedDate}</span>
          </div>
        </div>

        {/* Price and Booking Count */}
        <div className="mb-4">
          <p className="text-yellow-400 text-lg font-bold">${price}/day</p>
          <p className="text-sm text-gray-400">Bookings: {bookingCount}</p>
        </div>

        {/* Book Now Button */}
        <Link
          to={`/car-details/${_id}`}
          disabled={availability === "Unavailable"} // Disable button if unavailable
          className={`mt-auto px-4 py-2 text-sm text-center font-bold rounded-lg shadow-md transition ${
            availability === "Unavailable"
              ? "bg-gray-500 text-gray-300 cursor-not-allowed"
              : "bg-yellow-400 text-black hover:bg-yellow-500"
          }`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
