import React, { useEffect, useState } from "react";
import mapImage from "./img/map.svg";
import "./style.css";

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [dates, setDates] = useState([]);
  const [date, setDate] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("https://apps.kodim.cz/daweb/leviexpress/api/cities")
      .then((response) => response.json())
      .then((data) => setCities(data.results));
    fetch("https://apps.kodim.cz/daweb/leviexpress/api/dates")
      .then((response) => response.json())
      .then((data) => setDates(data.results));
  }, []);

  const CityOptions = ({ cities }) => {
    return (
      <>
        <option value="">Vyberte</option>
        {cities.map((city) => (
          <option value={city.code} key={city.code}>
            {city.name}
          </option>
        ))}
      </>
    );
  };

  const DatesOptions = ({ dates }) => {
    return (
      <>
        <option value="">Vyberte</option>
        {dates.map((date) => (
          <option value={date.dateBasic} key={date.dateBasic}>
            {date.dateCs}
          </option>
        ))}
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`
    )
      .then((response) => response.json())
      .then((data) => onJourneyChange(data.results));
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            {fromCity === "" || toCity === "" || date === "" ? (
              <button className="btn" type="submit" disabled={true}>
                Vyhledat spoj
              </button>
            ) : (
              <button className="btn" type="submit" disabled={false}>
                Vyhledat spoj
              </button>
            )}
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
