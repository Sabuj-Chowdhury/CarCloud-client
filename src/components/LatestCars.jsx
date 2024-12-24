import CarCard from "./CarCard";

const LatestCars = () => {
  const cars = [
    {
      image:
        "https://images.unsplash.com/photo-1687993320725-c4c2708ef074?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      model: "Toyota Camry 2023",
      dailyPrice: 45,
      isAvailable: true,
      datePosted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712141905284-e7abdabd383e?q=80&w=2849&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      model: "Honda Civic 2022",
      dailyPrice: 40,
      isAvailable: false,
      datePosted: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    },
    {
      image:
        "https://images.unsplash.com/photo-1613921568536-555645be4032?q=80&w=2844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      model: "Ford Mustang 2024",
      dailyPrice: 75,
      isAvailable: true,
      datePosted: new Date(), // Today
    },
    {
      image:
        "https://images.unsplash.com/photo-1678214216417-d1f1ed399a35?q=80&w=2759&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      model: "Audi A4 2021",
      dailyPrice: 60,
      isAvailable: true,
      datePosted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    },
    {
      image:
        "https://images.unsplash.com/photo-1620591309146-f5b0dc646b28?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      model: "BMW X5 2023",
      dailyPrice: 90,
      isAvailable: false,
      datePosted: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    },
    {
      image:
        "https://images.unsplash.com/photo-1704144269874-b0032e965d66?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      model: "Mercedes-Benz C-Class 2022",
      dailyPrice: 80,
      isAvailable: true,
      datePosted: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Available Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default LatestCars;
