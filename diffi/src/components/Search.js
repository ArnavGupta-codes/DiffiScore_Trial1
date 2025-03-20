import React from 'react'
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const goToSearchPage = () => {
    navigate("/search");
  };
  return (
    <div className="search">
      <img src="/images/search.png" width="190vw" height="210vh" />
      <button class="Search-btn" onClick={goToSearchPage}>
        SEARCH
      </button>
    </div>
  );
}

export default Search
