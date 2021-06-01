import React, { useState } from "react";

function Items({ states }) {
  const [state, setState] = useState(0);
  const [city, setCity] = useState(state);
  const [landMark, setLandMark] = useState(city);

  const changeState = (e) => {
    setState(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateLandmark = (e) => {
    setLandMark(e.target.value);
  };

  return (
    <div className="container">
      <div id="state-name">
        <label htmlFor="state">State</label>
        <select id="state" onChange={changeState}>
          {states.map((state, id) => {
            return (
              <option key={id} value={id}>
                {state.name}
              </option>
            );
          })}
        </select>
        <div id="state-title">{states[state].name}</div>
        <div id="state-description">{states[state].description}</div>
      </div>
      <div id="city-name">
        <label htmlFor="city">City</label>
        <select id="city" onChange={updateCity}>
          {states[state].city.map((city, id) => {
            return (
              <option key={id} value={id}>
                {city.name}
              </option>
            );
          })}
        </select>
        <div id="city-title">{states[state].city[city].name}</div>
        <div id="city-description">{states[state].city[city].description}</div>
      </div>
      <div id="landmark-name">
        <label htmlFor="landmark">City</label>
        <select id="landmark" onChange={updateLandmark}>
          {states[state].city[city].landmarks.map((landmark, id) => {
            return (
              <option key={id} value={id}>
                {landmark.name}
              </option>
            );
          })}
        </select>
        <div id="landmark-title">
          {states[state].city[city].landmarks[landMark].name}
        </div>
        <div id="landmark-description">
          {states[state].city[city].landmarks[landMark].description}
        </div>
      </div>
    </div>
  );
}

export default Items;