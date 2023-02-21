import "./Card.css";
import React from "react";

const Card = ({ name, date, reserveTime, numGuest }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{reserveTime}</p>
      <p>number of guest: {numGuest}</p>
    </div>
  );
};

export default Card;
