// Reducer for handling favorites state
const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      // Add an item to favorites
      return [...state, action.payload];
    case "REMOVE_FROM_FAVORITES":
      // Remove an item from favorites
      return state.filter((_, index) => index !== action.payload);
    case "SET_FAVORITES":
      // Set favorites state
      return action.payload;
    default:
      return state;
  }
};

export default favoritesReducer;
