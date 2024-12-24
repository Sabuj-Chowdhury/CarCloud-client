import { formatDistanceToNow } from "date-fns";

const CarCard = ({ car }) => {
  const formattedDate = formatDistanceToNow(new Date(car.datePosted), {
    addSuffix: true, // Adds "ago" or "in"
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-48 object-cover"
        src={car.image}
        alt={car.model}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {car.model}
        </h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">${car.dailyPrice}/day</span>
          {car.isAvailable ? (
            <span className="bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-full">
              Available
            </span>
          ) : (
            <span className="bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
              Unavailable
            </span>
          )}
        </div>
        <p className="text-gray-500 text-sm">Added {formattedDate}</p>
      </div>
    </div>
  );
};

export default CarCard;
