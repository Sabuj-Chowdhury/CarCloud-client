import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Autoplay and loop the video
    if (videoRef.current) {
      videoRef.current.autoplay = true;
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/5309381/5309381-hd_1920_1080_25fps.mp4"
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>
      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/70">
        {/* Semi-transparent overlay */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-emerald-400 mb-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Experience Luxury
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 text-center px-4 md:px-0"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Rent the car of your dreams.
        </motion.p>
        <Link
          to="/available-cars"
          className="bg-emerald-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-emerald-600 transition duration-300"
        >
          View Available Cars
        </Link>
      </div>
    </div>
  );
};

export default Banner;
