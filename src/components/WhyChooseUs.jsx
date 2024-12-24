import {
  FaCar,
  FaDollarSign,
  FaCalendarCheck,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="bg-gray-800 rounded-lg p-8 text-center flex flex-col items-center">
            <FaCar className="text-5xl text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Wide Variety of Cars</h3>
            <p className="text-gray-300 leading-relaxed">
              From budget-friendly options to luxury vehicles, we have the
              perfect car for your needs.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 text-center flex flex-col items-center">
            <FaDollarSign className="text-5xl text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Affordable Prices</h3>
            <p className="text-gray-300 leading-relaxed">
              Competitive daily rates you can count on, ensuring the best value
              for your money.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 text-center flex flex-col items-center">
            <FaCalendarCheck className="text-5xl text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Easy Booking Process</h3>
            <p className="text-gray-300 leading-relaxed">
              Seamlessly book your ride in just a few clicks, saving you time
              and hassle.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 text-center flex flex-col items-center">
            <FaHeadset className="text-5xl text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              24/7 Customer Support
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our dedicated team is available around the clock to assist you
              with any queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
