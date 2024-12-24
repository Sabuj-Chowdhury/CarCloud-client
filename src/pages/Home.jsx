import Banner from "../components/Banner";
import LatestCars from "../components/LatestCars";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Why choose us */}
      <WhyChooseUs></WhyChooseUs>
      {/* latest cars */}
      <LatestCars></LatestCars>
      {/* TODO: Extra section with animations */}
      {/* Special offer */}
    </div>
  );
};

export default Home;
