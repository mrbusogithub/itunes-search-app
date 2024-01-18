const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env

// Import the jsonwebtoken library for creating and verifying JSON Web Tokens (JWT)
const jwt = require("jsonwebtoken");

// Define a middleware function to authenticate JWT tokens
const authenticateJWT = (req, res, next) => {
  // Extract JWT token from the request header
  const token = req.header("Authorization");

  // If no token is present, continue to the next middleware or route
  if (!token) {
    return next();
  }

  console.log("Received token:", token);

  // Check if the token exists
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const tokenParts = token.split(" ");
  // Ensure the token is properly formatted
  if (tokenParts.length !== 2) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const actualToken = tokenParts[1];

  // Fetch the JWT secret from the environment variable
  const jwtSecret = process.env.JWT_SECRET;

  // Verify JWT token using the provided secret
  jwt.verify(actualToken, jwtSecret, (err, user) => {
    if (err) {
      console.error("JWT Verification Error:", err);
      return res.status(403).json({ message: "Forbidden" });
    }

    req.user = user;
    next();
  });
};

// Export the authentication middleware for use in other files
module.exports = authenticateJWT;
