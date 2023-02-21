import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  //usestate input field
  const [inputInfo, SetInputInfo] = useState({
    name: "",
    date: "",
    reserveTime: "",
    numGuest: "",
  });
  const handleChange = (event) => {
    SetInputInfo({ ...inputInfo, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <input
        className="name"
        type="text"
        placeholder="Name"
        onChange={(event) => handleChange(event)}
      ></input>
      <input
        className="date"
        type="text"
        placeholder="Date (mm/dd)"
        onChange={(event) => handleChange(event)}
      ></input>
      <input
        className="reserveTime"
        type="text"
        placeholder="Time (7:00)"
        onChange={(event) => handleChange(event)}
      ></input>
      <input
        className="num-guest"
        type="number"
        placeholder="Number of guests"
        onChange={(event) => handleChange(event)}
      ></input>
      <button>Make Reservation</button>
    </form>
  );
};

export default Form;
