import React from "react";

function Cities({ city }) {
  console.log(city);
  return (
    <div className="city-info">
      <img className="city-image" src={city.image} alt={city.name} />
      <div className="city-text">
        <h3 className="city-name">
          {city.name}
          <br />
          {city.country}
        </h3>
        {/* <h4 className="city-country">{city.country}</h4> */}
      </div>
    </div>
  );
}

export default Cities;
