// Reducer for handling search state
const initialState = {
  albums: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_SUCCESS":
      // Set search results
      return { ...state, albums: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
