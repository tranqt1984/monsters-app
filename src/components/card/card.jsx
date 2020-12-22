import React from "react";

import "./card.css";

export const Card = ({ monsters }) => (
  <div className="card-container">
    {monsters.map((monster) => (
      <div className="card" key={monster.id}>
        <img src={`https://robohash.org/${monster.id}`} alt="" />
        <h2>{monster.name}</h2>
        <h3>{monster.email}</h3>
      </div>
    ))}
  </div>
);
