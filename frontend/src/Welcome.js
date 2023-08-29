import { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
import CityList from "./CityList";

export default function Welcome() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/cities")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCities(data);
      });
  }, []);

  return (
    <div className="welcome-page-container">
      <div className="welcome-page">
        <h1 className="welcome-page-header">
          Welcome to Voyage Travel Bookings.
        </h1>
        <h2 className="welcome-blurb"> For all your travel needs.</h2>
      </div>
      <CityList cityData={cities} />
    </div>
  );
}
