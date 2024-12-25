import Banner from "../components/Banner";
import BookingCountdown from "../components/BookingCountdow";
import LatestCars from "../components/LatestCars";
import SpecialOffers from "../components/SpecialOffers";
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
      <BookingCountdown></BookingCountdown>
      {/* Special offer */}
      <SpecialOffers></SpecialOffers>
    </div>
  );
};

export default Home;
