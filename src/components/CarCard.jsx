import { formatDistanceToNow } from "date-fns";

const CarCard = ({ car, onBook }) => {
  const {
    model,
    price,
    availability,
    registrationNumber,
    description,
    imageUrl,
    dateAdded,
  } = car || {};

  // Validate the date
  let formattedDate = "Unknown";
  if (dateAdded) {
    try {
      formattedDate = formatDistanceToNow(new Date(dateAdded), {
        addSuffix: true,
      });
    } catch (error) {
      console.error("Invalid date format:", dateAdded, error);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl relative">
      {/* Car Image */}
      <img className="w-full h-48 object-cover" src={imageUrl} alt={model} />

      {/* Car Details */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{model}</h3>
          {availability === "Not Available" ? (
            <span className="bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
              Unavailable
            </span>
          ) : (
            <span className="bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-full">
              Available
            </span>
          )}
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">${price}/day</span>
        </div>
        <p className="text-gray-500 text-sm">Added {formattedDate}</p>
      </div>

      {/* Book Now Button */}
      <button
        className={`absolute bottom-4 right-4 px-4 py-2 text-sm font-bold rounded-lg transition ${
          availability === "Not Available"
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-gray-800 text-white hover:bg-black"
        }`}
      >
        Book Now
      </button>
    </div>
  );
};

export default CarCard;
