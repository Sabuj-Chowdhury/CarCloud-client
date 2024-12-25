import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SpecialOffers = () => {
  const offers = [
    {
      title: "Get 15% off for weekend rentals!",
      description:
        "Book your weekend getaway now and enjoy a 15% discount on all car rentals.",
      buttonText: "Book Now",
    },
    {
      title: "Luxury cars at $99/day this holiday season!",
      description:
        "Experience luxury for less this holiday season. Rent select luxury cars for just $99 per day.",
      buttonText: "Learn More",
    },
    {
      title: "Mid-Week Madness: 20% off!",
      description:
        "Beat the crowds and enjoy 20% off on rentals from Monday to Thursday.",
      buttonText: "Rent Now",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-700 via-gray-800 to-black text-gray-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-emerald-400">
          Special Offers
        </h2>
        <p className="text-lg mb-12 text-gray-400">
          Discover our exclusive promotions and save big on your next adventure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-emerald-400">
                  {offer.title}
                </h3>
                <p className="text-gray-400 mb-5">{offer.description}</p>
                <Link to="/available-cars">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    {offer.buttonText}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
