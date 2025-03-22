import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [topK, setTopK] = useState(); // Default value of top_k
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/search/?query=${query}&top_k=${topK}`);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="SearchPage">
      <form className="form" onSubmit={handleSearch}>
        <input
          className="search_bar"
          id="Topic"
          placeholder="Enter Topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="number"
          placeholder="No. of questions"
          value={topK}
          onChange={(e) => setTopK(e.target.value)}
        />
        <button className="submit_button" type="submit">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </form>

      <div className="results">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="result-item">
              <p>Tag: {result.tag}</p>
              {/* <img src={`http://127.0.0.1:8000/uploads/${result.image_path.split('/').pop()}`} alt={result.tag} width="100" /> */}
              <img src={`http://127.0.0.1:8000/uploads/${result.image_path.split('\\').pop()}`} alt={result.tag} width="100" />
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

