// Import required modules
const express = require("express");
const { searchMusic } = require("../controllers/searchController");
const authenticateJWT = require("../middleware/authMiddleware");

// Create an Express router
const router = express.Router();

// Define a public route for searching music
router.get("/music", authenticateJWT, searchMusic);

// Export the router for use in other files
module.exports = router;
