// Import React from React library
import React from "react";
// Import useDispatch and useSelector hooks from React Redux
import { useDispatch, useSelector } from "react-redux";
// Import addToFavorites and removeFromFavorites actions from the favoritesActions file
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/actions/favoritesActions";
// Import the ListItem component
import ListItem from "./ListItem";

// ResultsList component displays search results and handles favorites
const ResultsList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const albums = useSelector((state) => state.search.albums);

  // Function to handle toggling favorites
  const handleToggleFavorites = (album) => {
    const isInFavorites = favorites.some(
      (fav) => fav.albumName === album.albumName
    );

    if (isInFavorites) {
      // Remove from favorites
      const index = favorites.findIndex(
        (fav) => fav.albumName === album.albumName
      );
      dispatch(removeFromFavorites(index));
    } else {
      // Add to favorites
      dispatch(addToFavorites(album));
    }
  };

  return (
    <div className="mt-3">
      <ul className="list-group">
        {/* Map through albums to display each item using ListItem component */}
        {albums.map((album, index) => (
          <ListItem
            key={index}
            item={album}
            onButtonClick={() => handleToggleFavorites(album)}
            buttonText={
              favorites.some((fav) => fav.albumName === album.albumName)
                ? "Remove from Favorites"
                : "Add to Favorites"
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
