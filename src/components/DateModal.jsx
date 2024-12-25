import { useState } from "react";

const DateModal = ({ selectedBooking, handleDateChange }) => {
  const [error, setError] = useState("");

  const validateDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    setError("");

    // Validate that start date is not the same as end date
    if (start.getTime() === end.getTime()) {
      setError("Start date can't be the same as end date.");
      return false;
    }

    // Validate that end date is not less than start date
    if (end < start) {
      setError("End date can't be less than start date.");
      return false;
    }

    return true;
  };

  return (
    <dialog
      id="modify_date_modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Modify Booking Dates</h3>
        {selectedBooking && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const startDate = formData.get("startDate");
              const endDate = formData.get("endDate");

              // Validate dates before handling the change
              if (validateDates(startDate, endDate)) {
                handleDateChange(selectedBooking._id, startDate, endDate);
                document.getElementById("modify_date_modal").close();
              }
            }}
          >
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Start Date</span>
              </label>
              <input
                type="date"
                name="startDate"
                defaultValue={new Date(selectedBooking.startDate)} // Correctly format date for input
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">End Date</span>
              </label>
              <input
                type="date"
                name="endDate"
                defaultValue={new Date(selectedBooking.endDate)} // Correctly format date for input
                className="input input-bordered w-full"
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error message */}
            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("modify_date_modal").close()
                }
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Confirm
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
};

export default DateModal;
