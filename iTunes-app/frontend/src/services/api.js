// Import axios library for making HTTP requests
import axios from "axios";
// Create an instance of axios with a base URL
const api = axios.create({
  baseURL: "http://localhost:5000",
});
// Export the axios instance
export default api;
