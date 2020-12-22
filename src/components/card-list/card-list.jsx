import React from "react";
import { Card } from "../card/card";

import "./card-list.css";

export const CardList = ({ monsters }) => (
  <div className="card-list">
    <Card monsters={monsters} />
  </div>
);
