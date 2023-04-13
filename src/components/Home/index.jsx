import React from "react";
import { JourneyPicker } from "../JourneyPicker";
import { useState } from "react";
import { JourneyDetail } from "../JourneyDetail";
import { useNavigate } from "react-router-dom";
import { SeatPicker } from "../SeatPicker";

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  const handleBuy = () => {
    fetch("https://apps.kodim.cz/daweb/leviexpress/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "create",
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => navigate(`/reservation/${data.results.reservationId}`));
  };

  const navigate = useNavigate();

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? <JourneyDetail journey={journey} /> : null}
      {journey ? <SeatPicker journeyId={journey.journeyId} seats={journey.seats} /> : null}

      {console.log(journey)}

      <div className="controls container">
        <button className="btn btn--big" type="button" onClick={handleBuy}>
          Rezervovat
        </button>
      </div>
    </main>
  );
};
