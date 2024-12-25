import { FaTrashAlt } from "react-icons/fa";

const BookingTable = ({ booking }) => {
  const {
    model,
    imageUrl,
    bookedAt,
    price,
    bookingStatus,
    startDate,
    endDate,
  } = booking || {};

  // Calculate the booking duration in days
  const start = new Date(startDate);
  const end = new Date(endDate);
  const durationInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

  // Calculate the total price (daily price * duration)
  const dailyPrice = parseFloat(price);
  const total = (dailyPrice * durationInDays).toFixed(2);

  // Format the date and time
  const formattedDate = new Date(bookedAt).toLocaleDateString();
  const formattedTime = new Date(bookedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <tr className="hover:bg-amber-500 hover:text-black transition-all">
      <td className="p-4 border border-amber-400">
        <img src={imageUrl} alt="" className="w-20 h-20 object-cover mx-auto" />
      </td>
      <td className="p-4 border border-amber-400">{model}</td>
      <td className="p-4 border border-amber-400">
        {formattedDate} {formattedTime}
      </td>
      <td className="p-4 border border-amber-400">${total}</td>
      <td className="p-4 border border-amber-400">
        <span
          className={`px-2 py-1 rounded-full ${
            bookingStatus === "confirmed"
              ? "bg-green-500 text-black"
              : "bg-yellow-500 text-black"
          }`}
        >
          {bookingStatus.charAt(0).toUpperCase() + bookingStatus.slice(1)}
        </span>
      </td>
      <td className="p-4 border border-amber-400 flex justify-center gap-4">
        <button className="bg-blue-500 text-black px-3 py-2 rounded hover:bg-blue-400 transition-all">
          Modify Date
        </button>
        <button className="bg-red-500 text-black px-3 py-2 rounded flex items-center gap-2 hover:bg-red-400 transition-all">
          <FaTrashAlt /> Cancel
        </button>
      </td>
    </tr>
  );
};

export default BookingTable;
