// Import React from React library
import React from "react";
// Import Routes and Route components from React Router
import { Routes, Route } from "react-router-dom";
// Import FavoritesPage and HomePage components
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
// Import Navigation component
import Navigation from "./components/Navigation";
// Import Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
// Import global styles
import "./App.css";

// App component renders the main structure of the application
function App() {
  return (
    <div className="app">
      {/* Navigation component for top navigation */}
      <Navigation />
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<HomePage />} />
        {/* Route for the favorites page */}
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
