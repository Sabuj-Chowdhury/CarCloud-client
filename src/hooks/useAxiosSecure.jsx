import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_URL}`,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error.response.data.message);
        if (error.status === 401 || error.status === 403) {
          logOut();
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
