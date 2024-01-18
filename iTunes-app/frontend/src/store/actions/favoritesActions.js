// Actions related to favorites

// Action creator to add an album to favorites
export const addToFavorites = (album) => ({
  type: "ADD_TO_FAVORITES", // Action type for adding to favorites
  payload: album, // Payload contains the album data to be added
});

// Action creator to remove an album from favorites
export const removeFromFavorites = (index) => ({
  type: "REMOVE_FROM_FAVORITES", // Action type for removing from favorites
  payload: index, // Payload contains the index of the album to be removed
});

// Action creator to set the entire favorites array
export const setFavorites = (favorites) => ({
  type: "SET_FAVORITES", // Action type for setting favorites
  payload: favorites, // Payload contains the entire favorites array
});
