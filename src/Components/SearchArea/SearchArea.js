import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./search-area.scss";

const SearchArea = () => {
  return (
    <div className="search-container">
      <form>
        <input
          className="search-box"
          type="text"
          label="search"
          placeholder="search"
          name="search"
        />
        <button id="search-btn" type="submit">
          <FontAwesomeIcon className="info-icons" icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default SearchArea;
