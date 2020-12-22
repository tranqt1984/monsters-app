import React from "react";

import "./search-box.css";

const SearchBox = ({ handleInputChange, placeholder }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleInputChange}
  />
);

export default SearchBox;
