import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchPage = () => {
    return (
      <div className="SearchPage">
        <form class="form">
          <input
            class="search_bar"
            id="Topic"
            placeholder="Enter Topic..."
          ></input>
          <button class="submit_button">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </form>
      </div>
    );
}

export default SearchPage