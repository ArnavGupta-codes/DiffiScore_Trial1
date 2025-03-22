import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await axios.get(`http://127.0.0.1:8000/search`, {
        params: { query },
      });
      setResults(response.data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="border p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
          Search
        </button>
      </form>

      <ul>
        {results.length > 0 ? (
          results.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
};


const SearchPage = () => {
    return (
      <div className="SearchPage">
        <form class="form">
          <input
            class="search_bar"
            id="Topic"
            placeholder="Enter Topic..."
          ></input>
          <button class="submit_button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </form>
      </div>
    );
}

export default SearchPage

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// from fastapi.middleware.cors import CORSMiddleware;
// import axios from "axios";

// app = FastAPI()

// # CORS CONFIGURATION
// app.add_middleware(
//     CORSMiddleware,
//     allow_origins=["http://localhost:3001"],  # Allow only frontend origin
//     allow_credentials=True,
//     allow_methods=["*"],  # Allow all HTTP methods
//     allow_headers=["*"],  # Allow all headers
// )

// @app.get("/search")
// async def search(query: str, top_k: int = 2):
//     return {"results": [f"Result 1 for {query}", f"Result 2 for {query}"]}

// const SearchPage = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!query) return;

//     try {
//       const response = await axios.get("http://127.0.0.1:8000/search", {
//         params: { query, top_k: 5 },
//       });
//       setResults(response.data.results);
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   return (
//     <div className="SearchPage p-4">
//       <form className="form flex items-center" onSubmit={handleSearch}>
//         <input
//           className="search_bar border p-2 rounded"
//           id="Topic"
//           placeholder="Enter Topic..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button type="submit" className="submit_button ml-2 p-2 bg-blue-500 text-white rounded">
//           <FontAwesomeIcon icon={faSearch} className="search-icon" />
//         </button>
//       </form>

//       <ul className="mt-4">
//         {results.length > 0 ? (
//           results.map((item, index) => <li key={index}>{item}</li>)
//         ) : (
//           <p>No results found</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default SearchPage;
