import axios from "axios";

// Action for searching music
export const searchMusic = (term, mediaType) => async (dispatch) => {
  try {
    // Make an asynchronous request to the music search API
    const response = await axios.get(
      `https://itunes-search-music.onrender.com/api/search/music`,
      {
        params: { term, mediaType },
        headers: { Authorization: "" },
      }
    );

    // Dispatch a search success action with the retrieved albums
    dispatch({ type: "SEARCH_SUCCESS", payload: response.data.albums });
  } catch (error) {
    // Log any errors that occur during the search
    console.error(error);
  }
};
