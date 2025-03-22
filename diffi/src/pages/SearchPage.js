import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// // const Search = () => {
// //   const [query, setQuery] = useState("");
// //   const [results, setResults] = useState([]);

// //   const handleSearch = async (e) => {
// //     e.preventDefault();
// //     if (!query) return;

// //     try {
// //       const response = await axios.get(`http://127.0.0.1:8000/search`, {
// //         params: { query },
// //       });
// //       setResults(response.data.results);
// //     } catch (error) {
// //       console.error("Error fetching search results:", error);
// //     }
// //   };

// //   return (
// //     <div className="p-4">
// //       <form onSubmit={handleSearch} className="mb-4">
// //         <input
// //           type="text"
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           placeholder="Search..."
// //           className="border p-2"
// //         />
// //         <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
// //           Search
// //         </button>
// //       </form>

// //       <ul>
// //         {results.length > 0 ? (
// //           results.map((item, index) => <li key={index}>{item}</li>)
// //         ) : (
// //           <p>No results found</p>
// //         )}
// //       </ul>
// //     </div>
// //   );
// // };


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


// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// // import axios from "axios";

// const SearchPage = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;

//     setLoading(true);
//     setError("");
//     setResults([]);

//     try {
//       const response = await axios.get("http://127.0.0.1:8000/search", {
//         params: { query, top_k: 5 },
//       });
//       setResults(response.data.results);
//     } catch (error) {
//       setError("Failed to fetch results. Please try again.");
//       console.error("Error fetching search results:", error);
//     } finally {
//       setLoading(false);
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
//         <button
//           type="submit"
//           className="submit_button ml-2 p-2 bg-blue-500 text-white rounded"
//           disabled={!query.trim()}
//         >
//           {loading ? "Searching..." : <FontAwesomeIcon icon={faSearch} className="search-icon" />}
//         </button>
//       </form>

//       {error && <p className="text-red-500 mt-2">{error}</p>}

//       <ul className="mt-4">
//         {loading ? (
//           <p>Loading...</p>
//         ) : results.length > 0 ? (
//           results.map((item, index) => <li key={index} className="border-b py-1">{item}</li>)
//         ) : (
//           <p>No results found</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default SearchPage;
