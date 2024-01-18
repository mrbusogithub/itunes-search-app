// Import axios library for making HTTP requests
import axios from "axios";
// Create an instance of axios with a base URL
const api = axios.create({
  baseURL: "https://itunes-search-music-backend.onrender.com",
});
// Export the axios instance
export default api;
