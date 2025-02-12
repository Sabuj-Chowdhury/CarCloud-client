const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <div>
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-6">
            About Us
          </h1>
          <p className="text-lg leading-relaxed">
            Welcome to <span className="text-yellow-400">CarCloud</span>, the
            ultimate destination for luxury and exotic cars. With a passion for
            elegance and performance, we curate the finest collection of premium
            vehicles from around the world. Our mission is to provide an
            unparalleled buying experience that blends sophistication with
            precision engineering.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            At CarCloud, we don’t just sell cars; we offer a lifestyle. Our team
            of experts ensures every vehicle meets the highest standards of
            excellence, allowing you to drive with confidence and prestige.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury Car"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
