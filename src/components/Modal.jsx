const Modal = ({ carId }) => {
  console.log(carId);

  return (
    <dialog id="update_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Update Car Details</h3>
        <form className="space-y-4">
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
