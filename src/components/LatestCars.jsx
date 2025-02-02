import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";

const LatestCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/latest-cars`)
      .then((res) => {
        setCars(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  });

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  // console.log(cars);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-400">
        Recent Listings
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
