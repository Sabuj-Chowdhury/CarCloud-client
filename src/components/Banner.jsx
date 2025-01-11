import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.autoplay = true;
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/5309381/5309381-hd_1920_1080_25fps.mp4"
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/70 px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-400 mb-4 text-center"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Experience Luxury
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 text-center max-w-xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          Rent the car of your dreams and embark on an unforgettable journey.
        </motion.p>
        <Link
          to="/available-cars"
          className="bg-emerald-500 text-black font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-emerald-600 transition duration-300"
        >
          View Available Cars
        </Link>
      </div>
    </div>
  );
};

export default Banner;
