const axios = require("axios"); // Import the axios library for making HTTP requests

// Define a controller function for searching music
const searchMusic = async (req, res) => {
  console.log("Controller function reached!");
  try {
    const { term, mediaType } = req.query;
    console.log("Search Term:", term);
    console.log("Media Type:", mediaType);

    // Use the iTunes Search API to fetch music data
    const response = await axios.get("https://itunes.apple.com/search", {
      params: {
        term,
        media: mediaType,
      },
    });

    // Extract relevant information from the iTunes API response
    const albums = response.data.results.map((result) => ({
      albumName: result.collectionName,
      artistName: result.artistName,
      albumCover: result.artworkUrl100,
      releaseDate: result.releaseDate,
    }));

    // Respond with the extracted album information
    res.status(200).json({ albums });
  } catch (error) {
    console.error("Error searching music:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Export the controller function for use in other files
module.exports = {
  searchMusic,
};
