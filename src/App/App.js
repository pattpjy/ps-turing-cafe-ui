import React, { Component } from "react";
import AllReservation from "../AllRese/AllRese";
import "./App.css";
import Form from "../form/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservationDisplay: [],
    };
  }

  addReservation = (newRes) => {
    const addRes = [...this.reservationDisplay, newRes];
    this.setState({ reservationDisplay: addRes });
  };
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form />
        </div>
        <div className="resy-container">
          <AllReservation />
        </div>
      </div>
    );
  }
}

export default App;
