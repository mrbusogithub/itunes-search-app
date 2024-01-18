// Import React and useState from React library
import React, { useState } from "react";
// Import useDispatch hook from React Redux
import { useDispatch } from "react-redux";
// Import searchMusic action from searchActions file
import { searchMusic } from "../store/actions/searchActions.js";
// Import Button component from react-bootstrap library
import Button from "react-bootstrap/Button";
// Import lodash debounce function for delaying search
import _debounce from "lodash/debounce";

// SearchForm component provides a search input form for music
const SearchForm = () => {
  // Redux dispatch function
  const dispatch = useDispatch();

  // State for search term and media type
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaType, setMediaType] = useState("music");

  // Use lodash debounce to delay the search
  const delayedSearch = _debounce(() => {
    // Dispatch the search action with the current search term and media type
    dispatch(searchMusic(searchTerm, mediaType));
  }, 500);

  // Function to handle search
  const handleSearch = () => {
    delayedSearch();
  };

  return (
    <div className="mt-4" style={{ textAlign: "center" }}>
      <label htmlFor="searchInput" style={{ fontSize: "20px" }}>
        Search for Media Here:
      </label>
      {/* Input for search term */}
      <input
        type="text"
        placeholder="Enter artist name and/or album"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          delayedSearch();
        }}
        style={{ width: "380px", fontSize: "20px", borderRadius: "5px" }}
      />
      {/* Dropdown for media type */}
      <select
        value={mediaType}
        onChange={(e) => {
          setMediaType(e.target.value);
          delayedSearch();
        }}
        style={{ width: "80px", borderRadius: "5px", fontSize: "18px" }}
      >
        <option value="music">Music</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="audiobook">Audiobook</option>
        <option value="short film">Short Film</option>
        <option value="tv show">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">Ebook</option>
        <option value="all">All</option>
      </select>
      {/* Search button */}
      <div className="mt-3 ms-5">
        <Button variant="outline-secondary" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
