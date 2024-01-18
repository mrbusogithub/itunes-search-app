const express = require("express"); // Import the Express.js framework for building the server
const bodyParser = require("body-parser"); // Import the bodyParser middleware for parsing JSON requests
const cors = require("cors"); // Import the CORS middleware to enable Cross-Origin Resource Sharing
const searchRoutes = require("./routes/searchRoutes"); // Import the search routes module to handle specific routes related to searching
require("dotenv").config(); // Load environment variables from .env

// Create an Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
// Parse incoming JSON data
app.use(bodyParser.json());

// Use the search routes for handling music search requests
app.use("/api/search", searchRoutes);

// Set up server to listen on the specified port or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
