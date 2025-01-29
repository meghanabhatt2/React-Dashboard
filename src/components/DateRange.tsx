import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns"; // For formatting dates
import "react-datepicker/dist/react-datepicker.css"; // Import datepicker styles

const DateRangeSelector: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  // Handle Submit
  const handleSubmit = () => {
    if (startDate && endDate) {
      alert(
        `Selected Date Range: ${format(startDate, "yyyy-MM-dd")} to ${format(
          endDate,
          "yyyy-MM-dd"
        )}`
      );
    } else {
      alert("Please select both start and end dates.");
    }
  };

  // Format dates for display
  const formattedStartDate = startDate ? format(startDate, "yyyy-MM-dd") : "";
  const formattedEndDate = endDate ? format(endDate, "yyyy-MM-dd") : "";

  return (
    <div className="date-range-selector">
      <h3 className="text-xl font-semibold mb-4">Select Date Range</h3>

      <div className="flex gap-4">
        {/* Start Date Picker */}
        <div className="flex flex-col">
          <label className="text-sm mb-1">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy-MM-dd"
            className="p-2 border rounded-md"
            placeholderText="Select start date"
          />
        </div>

        {/* End Date Picker */}
        <div className="flex flex-col">
          <label className="text-sm mb-1">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || undefined} // Ensure minDate is either a Date or undefine
            dateFormat="yyyy-MM-dd"
            className="p-2 border rounded-md"
            placeholderText="Select end date"
          />
        </div>
      </div>

      <div className="mt-4">
        <p>
          <strong>Selected Date Range:</strong>
        </p>
        <p>
          {formattedStartDate} to {formattedEndDate}
        </p>
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-gray-800 text-white rounded-md shadow hover:bg-gray-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DateRangeSelector;
