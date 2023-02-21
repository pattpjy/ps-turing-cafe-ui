import "./Card.css";
import React from "react";

const Card = ({ name, date, reserveTime, numGuest }) => {
  return (
    <div className="card">
      <p>{name}</p>
      <p>{date}</p>
      <p>{reserveTime}</p>
      <p>number of guest: {numGuest}</p>
    </div>
  );
};

export default Card;
