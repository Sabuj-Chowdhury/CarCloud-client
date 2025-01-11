import { Link } from "react-router-dom";

const MembershipBenefits = () => {
  const benefits = [
    {
      title: "Exclusive Discounts",
      description: "Save up to 20% on every rental as a member.",
      icon: "💸",
    },
    {
      title: "Priority Bookings",
      description: "Reserve your favorite car before anyone else.",
      icon: "🚗",
    },
    {
      title: "24/7 Customer Support",
      description: "Get dedicated support whenever you need it.",
      icon: "📞",
    },
    {
      title: "Free Upgrades",
      description: "Enjoy free upgrades to premium models.",
      icon: "🚀",
    },
  ];

  const testimonials = [
    {
      name: "katrina",
      feedback:
        "CarCloud membership transformed my travel experience! Booking is effortless, and the discounts are fantastic.",
      image:
        "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jane Smith",
      feedback:
        "The priority booking feature is a lifesaver. I always get the car I want, even during peak seasons!",
      image:
        "https://images.unsplash.com/photo-1566802842272-e694af42eb29?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Lee",
      feedback:
        "Free upgrades and amazing customer service. CarCloud truly values its members!",
      image:
        "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const membershipPlans = [
    {
      plan: "Silver",
      price: "$19.99/month",
      features: ["5% discount on rentals", "Priority support"],
    },
    {
      plan: "Gold",
      price: "$49.99/month",
      features: [
        "10% discount on rentals",
        "Priority bookings",
        "24/7 support",
      ],
    },
    {
      plan: "Platinum",
      price: "$99.99/month",
      features: [
        "20% discount on rentals",
        "Free upgrades",
        "Priority bookings",
        "24/7 VIP support",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-gradient-to-b from-gray-900 to-black text-white py-10 px-6">
      <h1 className="text-5xl font-bold text-center mb-10 text-emerald-500">
        Why Become a Member?
      </h1>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-6xl mb-4">{benefit.icon}</div>
            <h2 className="text-2xl font-bold text-emerald-400">
              {benefit.title}
            </h2>
            <p className="text-gray-300 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Membership Plans Section */}
      <h2 className="text-4xl font-bold text-center mt-16 mb-10 text-emerald-500">
        Membership Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {membershipPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold text-emerald-400">
                {plan.plan}
              </h3>
              <p className="text-xl text-gray-300 mt-2">{plan.price}</p>
              <ul className="text-gray-300 mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✔ {feature}</li>
                ))}
              </ul>
            </div>
            <Link to="/registration">
              <button className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-2 px-4 w-full rounded-lg transition duration-300">
                Choose {plan.plan}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <h2 className="text-4xl font-bold text-center mt-16 mb-10 text-emerald-500">
        What Our Members Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-bold text-emerald-400">
              {testimonial.name}
            </h3>
            <p className="text-gray-300 mt-2">{testimonial.feedback}</p>
          </div>
        ))}
      </div>

      {/* Final Call-to-Action */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-4 text-emerald-500">
          Ready to Unlock Premium Benefits?
        </h2>
        <p className="text-gray-300 mb-8">
          Join CarCloud today and elevate your car rental experience.
        </p>
        <Link to="/registration">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-3 px-8 rounded-lg transition duration-300">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MembershipBenefits;
