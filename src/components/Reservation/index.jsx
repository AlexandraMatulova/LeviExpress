import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";

export const Reservation = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
      .then((resp) => resp.json())
      .then((data) => setReservation(data.results));
  }, []);

  console.log(reservation);
  console.log(id);

  return reservation ? (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {reservation.reservationId}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty: </p>
          <p>Odjezd: </p>
          <p>Příjezd: </p>
          <p>Sedadlo: </p>
        </div>
        <div className="reservation__info">
          <p>{reservation.date}</p>
          <p>
            {reservation.fromCity.name}, {reservation.fromCity.time}
          </p>
          <p>
            {reservation.toCity.name}, {reservation.toCity.time}
          </p>
          <p>{reservation.seatNumber}</p>
        </div>
      </div>
    </div>
  ) : null;
};
