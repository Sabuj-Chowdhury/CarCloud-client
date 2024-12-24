import { useState } from "react";

import logo from "../assets/logo.jpeg";

const Navbar = ({ isLoggedIn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-100 py-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="CarCloud Logo" className="h-10 mr-2" />
          <span className="font-bold text-xl">CarCloud</span>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {/* Mobile Menu Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`md:flex ${
            isMobileMenuOpen ? "flex" : "hidden"
          } flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-gray-100 md:bg-transparent shadow-md md:shadow-none`}
        >
          <ul className="md:flex space-x-6 text-gray-700 p-4 md:p-0 items-center">
            {" "}
            {/* Added items-center */}
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/cars" className="hover:text-blue-500">
                Available Cars
              </a>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <a href="/add-car" className="hover:text-blue-500">
                    Add Car
                  </a>
                </li>
                <li>
                  <a href="/my-cars" className="hover:text-blue-500">
                    My Cars
                  </a>
                </li>
                <li>
                  <a href="/my-bookings" className="hover:text-blue-500">
                    My Bookings
                  </a>
                </li>
                <li>
                  <a
                    href="/logout"
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li>
                <a
                  href="/login"
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                >
                  Log-in
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
