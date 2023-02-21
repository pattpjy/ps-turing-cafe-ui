import React, { useState, useEffect } from "react";
import "./AllRese.css";
import Card from "../Card/Card";

// display all reservation
//need to fetch data from API
//create Api call file
//function to display allReservation
//will need reservation detail card as a child component

const AllReservation = () => {
  //get request
  const [allReservation, setAllReservation] = useState([]);
  const [hasError, setHasError] = useState("");
  const url = "http://localhost:3001/api/v1/reservations";
  console.log(allReservation);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Unable To Fetch Your Reservation.Try Later");
        }
        const json = await response.json();
        setAllReservation(json);
      } catch (error) {
        setHasError(error.message);
      }
    }
    fetchData();
  }, []);
  //function to display Reservation

  const displayReservation = () => {
    const displayAllRese = allReservation.map((reserve) => {
      return (
        <Card
          key={reserve.id}
          name={reserve.name}
          date={reserve.date}
          reserveTime={reserve.time}
          numGuest={reserve.number}
        />
      );
    });
    return displayAllRese;
  };
  return <div className="">{displayReservation()}</div>;
};

export default AllReservation;
