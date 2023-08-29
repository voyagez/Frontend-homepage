import React from "react";
import Cities from "./Cities";

function CityList({ cityData }) {
  console.log(cityData);
  const mappedCities = cityData.map((city) => (
    <div className="city-card">
      <Cities key={city.id} city={city} />
    </div>
  ));
  console.log(mappedCities);
  return <div className="city-list">{mappedCities}</div>;
}

export default CityList;
