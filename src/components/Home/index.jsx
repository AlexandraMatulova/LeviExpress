import React from "react";
import { JourneyPicker } from "../JourneyPicker";
import { useState } from "react";
import { JourneyDetail } from "../JourneyDetail";

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? <JourneyDetail journey={journey} /> : null}
    </main>
  );
};
