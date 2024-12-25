import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import axios from "axios";
import { FaTh, FaList } from "react-icons/fa";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState("grid");

  useEffect(() => {
    const fetchAllCars = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_URL}/all-cars?sort=${sort}&search=${search}`
      );
      setCars(data);
    };
    fetchAllCars();
  }, [sort, search]);

  // console.log(cars);

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-5">
          <div>
            {/* Sorting options */}
            <label
              htmlFor="sortOptions"
              className="text-[#4a4a48] font-semibold"
            >
              Sort By:
            </label>
            <select
              name="sorting"
              id="sorting"
              onChange={(e) => setSort(e.target.value)}
              className="border p-4 rounded-md"
            >
              <option value="">Select</option>
              <option value="asc">Price (Lowest First)</option>
              <option value="dsc">Price (Highest First)</option>
            </select>
          </div>
          {/* Search input and button */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="search"
              placeholder="Search cars(brand,model)..."
              onBlur={(e) => setSearch(e.target.value)}
              className="border p-2 rounded-md"
            />
            <button className="bg-yellow-500 text-black p-2 rounded-md hover:bg-yellow-600">
              Search
            </button>
          </div>
          <div className=" flex items-center space-x-2">
            {/* Grid button */}
            <button
              onClick={() => setLayout("grid")}
              className={`p-2 rounded-md ${
                layout === "grid"
                  ? "bg-red-400 text-white shadow-lg"
                  : "bg-gray-200 text-black hover:bg-red-300"
              } transition duration-300`}
              aria-label="Grid View"
            >
              <FaTh size={20} />
            </button>
            {/* List button */}
            <button
              onClick={() => setLayout("list")}
              className={`p-2 rounded-md ${
                layout === "list"
                  ? "bg-green-400 text-white shadow-lg"
                  : "bg-gray-200 text-black hover:bg-green-300"
              } transition duration-300`}
              aria-label="List View"
            >
              <FaList size={20} />
            </button>
          </div>
        </div>
        <div
          className={`grid gap-8 mt-8 ${
            layout === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {cars.map((car, idx) => (
            <CarCard key={idx} car={car} layout={layout}></CarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCars;
