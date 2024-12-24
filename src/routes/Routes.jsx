import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AvailableCars from "../pages/AvailableCars";
import AddCar from "../pages/AddCar";
import MyCars from "../pages/MyCars";
import MyBookings from "../pages/MyBookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/available-cars",
        element: <AvailableCars></AvailableCars>,
      },
      {
        path: "/add-car",
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cars",
        element: <MyCars></MyCars>,
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>,
      },
    ],
  },
]);

export default router;
