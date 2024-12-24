import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section (Logo & Name) */}
        <div className="mb-6 md:mb-0 flex items-center">
          <img src={logo} alt="Your Logo" className="h-12 mr-4" />{" "}
          <div>
            <h3 className="text-xl font-bold">CarCloud</h3>
            <p className="text-sm text-gray-400">
              Where the road meets the cloud.
            </p>
          </div>
        </div>

        {/* Middle Section (Copyright) */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CarCloud. All rights reserved.
          </p>
        </div>

        {/* Right Section (Social Media Links) */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
