// Import React from React library
import React from "react";
// Import the FavoritesList component
import FavoritesList from "../components/FavoritesList";

// FavoritesPage component displays the user's favorite items
const FavoritesPage = () => (
  <div className="page-content" style={{ color: "blanchedalmond" }}>
    <h2>Favorites List</h2>
    <FavoritesList />
  </div>
);

export default FavoritesPage;
