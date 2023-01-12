import { useState } from "react";
import PropTypes from "prop-types";
import DateTimePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IconCalendar } from "./icons";

export const CalendarComponent = ({ date, onChangeDate, placeholder }) => {
  const [open, setOpen] = useState(false);

  const handleChange = (date) => {
    // onChangeDate(date);
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-6 h-[54px] bg-[#F4F4F4] outline-none pl-6 text-[#7D7D7D] outfit-l text-sm mb-6 w-64 relative">
      <span>{date ? date : placeholder}</span>
      <DateTimePicker
        selected={date}
        onChange={handleChange}
        onInputClick={() => setOpen(!open)}
        open={open}
      />
      <div
        className="w-6 h-6 absolute top-2/4 -translate-y-2/4 right-3"
        onClick={() => setOpen(!open)}
      >
        <IconCalendar />
      </div>
    </div>
  );
};

CalendarComponent.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChangeDate: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
