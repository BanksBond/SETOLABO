import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import "./CustomCalendar.css"; // Import your custom styles

const MyCalender = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const onChange = (selectedDate) => {
    setDate(selectedDate);
    setShowCalendar(false);
  };

  return (
    <div className="date-input-container">
      <input
        type="text"
        value={date.toDateString()}
        readOnly
        onClick={() => setShowCalendar(!showCalendar)}
        className="date-input"
      />
      {showCalendar && (
        <div className="calendar-container">
          <Calendar
            next2Label=""
            prev2Label
            calendarType="gregory"
            onChange={onChange}
            value={date}
            showNeighboringMonth={false}
          />
        </div>
      )}
    </div>
  );
};

export default MyCalender;
