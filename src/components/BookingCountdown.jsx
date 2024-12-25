import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BookingCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(86400);

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert time to hours, minutes, and seconds
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { hrs, mins, secs };
  };

  const { hrs, mins, secs } = formatTime(timeLeft);

  return (
    <div className="bg-black text-amber-400 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Book Now and Save: Limited-Time Luxury Deals
      </h1>
      <p className="text-lg md:text-xl mb-6 text-center">
        <span className="text-amber-500 font-semibold">20% Off</span>{" "}
        Lamborghini Rentals for the Next 24 Hours!
      </p>

      {/* Countdown Timer */}
      <motion.div
        className="flex gap-4 text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[hrs, mins, secs].map((unit, idx) => (
          <motion.div
            key={idx}
            className="text-4xl md:text-6xl font-bold bg-amber-500 text-black p-4 rounded-md shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.5,
              delay: idx * 0.2,
            }}
          >
            {unit.toString().padStart(2, "0")}
          </motion.div>
        ))}
      </motion.div>

      {/* Labels for Timer */}
      <div className="flex gap-4 text-sm md:text-lg font-semibold text-amber-400">
        <span>Hours</span>
        <span>Minutes</span>
        <span>Seconds</span>
      </div>

      {/* Call-to-Action */}
      <Link to="/available-cars">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-amber-500 text-black rounded-lg shadow-lg text-lg font-semibold hover:bg-amber-400 transition-all"
        >
          Book Now
        </motion.button>
      </Link>

      {/* Car Animation */}
      <motion.div
        className=" w-full flex justify-center"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <img
          src="https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with a car image URL
          alt="Racing Car"
          className="w-32 md:w-48"
        />
      </motion.div>
    </div>
  );
};

export default BookingCountdown;
