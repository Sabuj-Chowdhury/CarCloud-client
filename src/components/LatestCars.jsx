import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import axios from "axios";
import toast from "react-hot-toast";

const LatestCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/all-cars?limit=6`)
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  });

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl text-emerald-400 font-bold text-center mb-8">
        Available Cars
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default LatestCars;
