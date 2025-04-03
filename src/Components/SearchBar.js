import React, { useState } from "react";

const SearchBar = ({ showSearch }) => {
  const [query, setQuery] = useState(""); // Search input value

  return (
    <div className="search-container">
      {/* Popup Search Input */}
      {showSearch && (
        <div className="search-popup">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
