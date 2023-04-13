import React from "react";
import "./style.css";
import { Seat } from "../Seat";

export const SeatRow = ({ row }) => {
  const testRow = [
    {
      number: 33,
      isOccupied: false,
    },
    {
      number: 29,
      isOccupied: true,
    },
    {
      number: 25,
      isOccupied: false,
    },
  ];

  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat key={seat.number} number={seat.number} isOccupied={seat.isOccupied}/>
      ))}
    </div>
  );
};
