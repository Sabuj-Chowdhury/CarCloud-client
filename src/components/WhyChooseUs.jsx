import {
  FaCar,
  FaDollarSign,
  FaCalendarCheck,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-400">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaCar className="text-6xl text-emerald-400 mb-4" />,
              title: "Wide Variety of Cars",
              description:
                "From budget-friendly options to luxury vehicles, we have the perfect car for your needs.",
            },
            {
              icon: <FaDollarSign className="text-6xl text-emerald-400 mb-4" />,
              title: "Affordable Prices",
              description:
                "Competitive daily rates you can count on, ensuring the best value for your money.",
            },
            {
              icon: (
                <FaCalendarCheck className="text-6xl text-emerald-400 mb-4" />
              ),
              title: "Easy Booking Process",
              description:
                "Seamlessly book your ride in just a few clicks, saving you time and hassle.",
            },
            {
              icon: <FaHeadset className="text-6xl text-emerald-400 mb-4" />,
              title: "24/7 Customer Support",
              description:
                "Our dedicated team is available around the clock to assist you with any queries.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 hover:bg-gray-800 rounded-lg p-8 text-center flex flex-col items-center transition duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
