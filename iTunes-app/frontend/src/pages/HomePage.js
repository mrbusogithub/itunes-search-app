// Import React from React library
import React from "react";
// Import SearchForm and ResultsList components
import SearchForm from "../components/SearchForm";
import ResultsList from "../components/ResultsList";

// HomePage component displays the home page with search and results
const HomePage = () => (
  <div className="page-content" style={{ color: "blanchedalmond" }}>
    <h2>iTunes Search Page</h2>
    {/* SearchForm for user input */}
    <SearchForm />
    {/* ResultsList for displaying search results */}
    <ResultsList />
  </div>
);

export default HomePage;
