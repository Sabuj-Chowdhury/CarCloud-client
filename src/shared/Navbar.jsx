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
    <div className="transition-colors duration-300 shadow-md bg-black text-amber-400">
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
              `hover:text-amber-300 ${
                isActive ? "text-amber-500 font-semibold underline" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/available-cars"
            className={({ isActive }) =>
              `hover:text-amber-300 ${
                isActive ? "text-amber-500 font-semibold underline" : ""
              }`
            }
          >
            Available Cars
          </NavLink>

          {user && (
            <>
              <NavLink
                to="/add-car"
                className={({ isActive }) =>
                  `hover:text-amber-300 ${
                    isActive ? "text-amber-500 font-semibold underline" : ""
                  }`
                }
              >
                Add Car
              </NavLink>
              <NavLink
                to="/my-cars"
                className={({ isActive }) =>
                  `hover:text-amber-300 ${
                    isActive ? "text-amber-500 font-semibold underline" : ""
                  }`
                }
              >
                My Cars
              </NavLink>
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  `hover:text-amber-300 ${
                    isActive ? "text-amber-500 font-semibold underline" : ""
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
              <button
                onClick={onLogout}
                className="hover:text-red-500 ml-2 underline"
              >
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
          className="absolute top-16 right-5 w-64 bg-black text-amber-400 z-10 shadow-lg rounded-lg transition-transform duration-300"
          style={{
            transform: open ? "translateY(0)" : "translateY(-200%)",
          }}
        >
          <div className="flex flex-col items-center py-5 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-amber-300 ${
                  isActive ? "text-amber-500 font-semibold underline" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/available-cars"
              className={({ isActive }) =>
                `hover:text-amber-300 ${
                  isActive ? "text-amber-500 font-semibold underline" : ""
                }`
              }
            >
              Available Cars
            </NavLink>

            {user && (
              <>
                <NavLink
                  to="/my-bookings"
                  className={({ isActive }) =>
                    `hover:text-amber-300 ${
                      isActive ? "text-amber-500 font-semibold underline" : ""
                    }`
                  }
                >
                  My Bookings
                </NavLink>
                <NavLink
                  to="/add-car"
                  className={({ isActive }) =>
                    `hover:text-amber-300 ${
                      isActive ? "text-amber-500 font-semibold underline" : ""
                    }`
                  }
                >
                  Add Car
                </NavLink>
                <NavLink
                  to="/my-cars"
                  className={({ isActive }) =>
                    `hover:text-amber-300 ${
                      isActive ? "text-amber-500 font-semibold underline" : ""
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
