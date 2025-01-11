import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { useState, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logOut();
    navigate("/");
  };

  return (
    <div className=" top-0 sticky z-20 transition-colors duration-300 shadow-md bg-black text-amber-400">
      {/* Navbar Header */}
      <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} className="h-10 mr-2 rounded-full" alt="logo" />
          </Link>
          <span className="font-bold text-xl">CarCloud</span>
        </div>

        {/* Large Screen Links */}
        <div className="hidden md:flex items-center justify-center space-x-5 flex-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all px-3 py-2 rounded-md ${
                isActive
                  ? "bg-amber-500 text-black font-semibold"
                  : "hover:text-amber-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/membership-benefits"
            className={({ isActive }) =>
              `transition-all px-3 py-2 rounded-md ${
                isActive
                  ? "bg-amber-500 text-black font-semibold"
                  : "hover:text-amber-400"
              }`
            }
          >
            Membership
          </NavLink>
          <NavLink
            to="/available-cars"
            className={({ isActive }) =>
              `transition-all px-3 py-2 rounded-md ${
                isActive
                  ? "bg-amber-500 text-black font-semibold"
                  : "hover:text-amber-400"
              }`
            }
          >
            Available Cars
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-all px-3 py-2 rounded-md ${
                isActive
                  ? "bg-amber-500 text-black font-semibold"
                  : "hover:text-amber-400"
              }`
            }
          >
            Contact Us
          </NavLink>

          {user && (
            <>
              <NavLink
                to="/add-car"
                className={({ isActive }) =>
                  `transition-all px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-amber-500 text-black font-semibold"
                      : "hover:text-amber-400"
                  }`
                }
              >
                Add Car
              </NavLink>
              <NavLink
                to="/my-cars"
                className={({ isActive }) =>
                  `transition-all px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-amber-500 text-black font-semibold"
                      : "hover:text-amber-400"
                  }`
                }
              >
                My Cars
              </NavLink>
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  `transition-all px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-amber-500 text-black font-semibold"
                      : "hover:text-amber-400"
                  }`
                }
              >
                My Bookings
              </NavLink>
            </>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              {/* User Avatar */}
              <div className="relative group">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                ) : (
                  <FaUserCircle className="w-10 h-10 text-gray-500 cursor-pointer" />
                )}
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-black text-amber-400 py-1 px-2 rounded-lg shadow-lg">
                  {user.displayName || "Anonymous User"}
                </div>
              </div>
              {/* Log Out Button */}
              <button onClick={onLogout} className="hover:text-red-500 ml-2 ">
                Log Out
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `hover:text-amber-300 ${
                  isActive ? "text-amber-500 font-semibold underline" : ""
                }`
              }
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Small Screen Menu Icons */}
        <div className="flex md:hidden items-center">
          <button onClick={() => setOpen(!open)} className="text-4xl">
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      {open && (
        <div
          className="absolute top-16 right-0 w-full min-h-screen bg-opacity-95   bg-black text-amber-400 z-10 shadow-lg rounded-lg transition-transform duration-300"
          style={{
            transform: open ? "translateY(0)" : "translateY(-200%)",
          }}
        >
          <div className="flex flex-col items-center py-5 space-y-4">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive
                    ? "bg-amber-500 text-black font-semibold"
                    : "hover:text-amber-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/membership-benefits"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive
                    ? "bg-amber-500 text-black font-semibold"
                    : "hover:text-amber-300"
                }`
              }
            >
              Membership
            </NavLink>
            <NavLink
              to="/available-cars"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive
                    ? "bg-amber-500 text-black font-semibold"
                    : "hover:text-amber-300"
                }`
              }
            >
              Available Cars
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive
                    ? "bg-amber-500 text-black font-semibold"
                    : "hover:text-amber-300"
                }`
              }
            >
              Contact Us
            </NavLink>

            {user && (
              <>
                <NavLink
                  to="/my-bookings"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded ${
                      isActive
                        ? "bg-amber-500 text-black font-semibold"
                        : "hover:text-amber-300"
                    }`
                  }
                >
                  My Bookings
                </NavLink>
                <NavLink
                  to="/add-car"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded ${
                      isActive
                        ? "bg-amber-500 text-black font-semibold"
                        : "hover:text-amber-300"
                    }`
                  }
                >
                  Add Car
                </NavLink>
                <NavLink
                  to="/my-cars"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded ${
                      isActive
                        ? "bg-amber-500 text-black font-semibold"
                        : "hover:text-amber-300"
                    }`
                  }
                >
                  My Cars
                </NavLink>
              </>
            )}

            {user ? (
              <button
                onClick={onLogout}
                className="hover:text-red-500 underline"
              >
                Log Out
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `hover:text-amber-300 ${
                    isActive ? "text-amber-500 font-semibold underline" : ""
                  }`
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
