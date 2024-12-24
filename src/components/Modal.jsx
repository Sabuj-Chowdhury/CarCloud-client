// import axios from "axios";
import { useContext, useRef } from "react";
// import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";

const Modal = ({ carId }) => {
  console.log(typeof carId);

  const { user } = useContext(AuthContext);

  const formRef = useRef(); // Create a ref for the form

  // for reset the form
  const handleReset = () => {
    const form = formRef.current;
    form.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);
    const { ...newCar } = initialData;
    newCar.features = newCar.features.split(",");
    newCar.owner = {
      email: user?.email,
      name: user?.displayName || {},
    };
    // newCar.dateAdded = new Date();
    // newCar.bookingStatus = "open"; //default status
    // newCar.bookingCount = 0; // default count
    console.log(newCar);

    // try {
    //   //  post request
    //   await axios.post(`${import.meta.env.VITE_URL}/add-car`, newCar);
    //   //  Reset form

    //   //  Show toast and navigate
    //   toast.success("Data Added Successfully!!!");

    // } catch (err) {
    //   toast.error(err.message);
    // }
  };

  return (
    <dialog id="update_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Update Car Details</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="model"
            className="input input-bordered w-full"
            placeholder="Car Model"
            required
          />
          <input
            type="number"
            name="price"
            className="input input-bordered w-full"
            placeholder="Daily Rental Price"
            required
          />
          <select
            name="availability"
            className="select select-bordered w-full"
            required
          >
            <option>Available</option>
            <option>Unavailable</option>
          </select>
          <input
            type="text"
            name="registrationNumber"
            className="input input-bordered w-full"
            placeholder="Vehicle Registration Number"
            required
          />
          <input
            type="text"
            name="features"
            className="input input-bordered w-full"
            placeholder="Features (comma-separated)"
          />
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Description"
          ></textarea>
          <input
            type="url"
            name="imageUrl"
            className="input input-bordered w-full"
            placeholder="Image URL"
            required
          />
          <input
            type="text"
            name="location"
            className="input input-bordered w-full"
            placeholder="Location"
            required
          />
          <div className="modal-action">
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => document.getElementById("update_modal").close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
