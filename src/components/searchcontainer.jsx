import React from "react";
import "../path/to/search.css"; // Replace with the correct path to your CSS file

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        id="search-input"
        placeholder="Search your prompt..."
      />
      <button className="button-77" role="button">
        Search
      </button>
    </div>
  );
};

export default Search;
