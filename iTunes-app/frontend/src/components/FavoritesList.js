import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector hooks from React Redux
import { removeFromFavorites } from "../store/actions/favoritesActions"; // Import removeFromFavorites and setFavorites actions from the favoritesActions file

import ListItem from "./ListItem"; // Import the ListItem component

// FavoritesList component displays a list of favorite items
const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  // Function to handle removal of an item from favorites
  const handleRemove = (index) => {
    dispatch(removeFromFavorites(index));
  };

  return (
    <div>
      <ul>
        {/* Map through favorites to display each item using ListItem component */}
        {favorites.map((favorite, index) => (
          <ListItem
            key={index}
            item={favorite}
            onButtonClick={() => handleRemove(index)}
            buttonText="Remove"
          />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
