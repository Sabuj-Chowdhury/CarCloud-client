import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyCars = () => {
  const fakeData = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/100",
      model: "Tesla Model S",
      price: "$150/day",
      availability: "Available",
      dateAdded: "2024-12-24",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/100",
      model: "Ford Mustang",
      price: "$100/day",
      availability: "Not Available",
      dateAdded: "2024-12-20",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/100",
      model: "Chevrolet Camaro",
      price: "$120/day",
      availability: "Available",
      dateAdded: "2024-12-18",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#fdf4e3] rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-[#4a4a48]">My Cars</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#d9f3e5] text-[#4a4a48]">
              <th className="p-3 border">Car Image</th>
              <th className="p-3 border">Car Model</th>
              <th className="p-3 border">Daily Rental Price</th>
              <th className="p-3 border">Availability</th>
              <th className="p-3 border">Date Added</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((car) => (
              <tr key={car.id} className="odd:bg-[#fef9e7] even:bg-[#fcf4e9]">
                <td className="p-3 border text-center">
                  <img
                    src={car.imageUrl}
                    alt={car.model}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="p-3 border text-center text-[#4a4a48]">
                  {car.model}
                </td>
                <td className="p-3 border text-center text-[#4a4a48]">
                  {car.price}
                </td>
                <td
                  className={`p-3 border text-center font-semibold ${
                    car.availability === "Available"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {car.availability}
                </td>
                <td className="p-3 border text-center text-[#4a4a48]">
                  {car.dateAdded}
                </td>
                <td className="p-3 border text-center">
                  {/* Update button */}
                  <button className="mx-2 p-2 bg-[#6d4d7c] text-white rounded hover:bg-[#5a3b66]">
                    <FaEdit />
                  </button>
                  {/* delete button */}
                  <button className="mx-2 p-2 bg-[#d9534f] text-white rounded hover:bg-[#c9302c]">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCars;
