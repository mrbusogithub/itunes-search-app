// Import configureStore from @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import searchReducer and favoritesReducer from reducers
import searchReducer from "./reducers/searchReducer";
import favoritesReducer from "./reducers/favoritesReducer";

// Combine reducers
const rootReducer = {
  search: searchReducer,
  favorites: favoritesReducer,
};

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools
});

export default store;
