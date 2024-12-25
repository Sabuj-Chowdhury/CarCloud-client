import { FaCalendarAlt, FaTrashAlt } from "react-icons/fa";

const BookingTable = ({ booking, openModal, handleCustomCancel }) => {
  const {
    model,
    imageUrl,
    price,
    bookingStatus = "",
    startDate,
    endDate,
    _id,
  } = booking || {};

  // Calculate the booking duration in days
  const start = new Date(startDate);
  const end = new Date(endDate);
  const durationInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

  // Calculate the total price (daily price * duration)
  const dailyPrice = parseFloat(price);
  const total = (dailyPrice * durationInDays).toFixed(2);

  // Format the date and time
  const startFormattedDate = new Date(startDate).toLocaleDateString();
  const startFormattedTime = new Date(startDate).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const endFormattedDate = new Date(endDate).toLocaleDateString();
  const endFormattedTime = new Date(endDate).toLocaleTimeString([], {
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
        {startFormattedDate} {startFormattedTime} - {endFormattedDate}{" "}
        {endFormattedTime}
      </td>
      <td className="p-4 border border-amber-400">${total}</td>
      <td className="p-4 border border-amber-400">
        <span
          className={`px-2 py-1 rounded-full ${
            bookingStatus === "confirmed"
              ? "bg-green-500 text-black"
              : bookingStatus === "canceled"
              ? "bg-red-500 text-black"
              : "bg-yellow-500 text-black"
          }`}
        >
          {bookingStatus
            ? bookingStatus.charAt(0).toUpperCase() + bookingStatus.slice(1)
            : "Unknown"}
        </span>
      </td>
      <td className="p-4 border border-amber-400 flex justify-center gap-4">
        {/* modify date */}
        <button
          onClick={() => openModal(booking)} // Call openModal here
          className="bg-blue-500 text-black px-3 py-2 rounded flex items-center gap-2 hover:bg-blue-400 transition-all"
        >
          <FaCalendarAlt /> Modify Date
        </button>

        {/* cancel booking */}
        <button
          onClick={() => handleCustomCancel(_id, bookingStatus, "canceled")}
          disabled={bookingStatus === "canceled"}
          className={`px-3 py-2 rounded flex items-center gap-2 transition-all ${
            bookingStatus === "canceled"
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-red-500 text-black hover:bg-red-400"
          }`}
        >
          <FaTrashAlt /> Cancel
        </button>
      </td>
    </tr>
  );
};

export default BookingTable;
