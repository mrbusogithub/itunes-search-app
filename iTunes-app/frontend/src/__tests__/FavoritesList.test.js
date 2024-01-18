import React from "react"; // Import React library for creating React components
import renderer from "react-test-renderer"; // Import renderer from react-test-renderer to render React components for testing
import FavoritesList from "../components/FavoritesList"; // Import the FavoritesList component to be tested
import configureStore from "redux-mock-store"; // Import configureStore from redux-mock-store to create a mock Redux store for testing
import { Provider } from "react-redux"; // Import Provider from react-redux to wrap the tested component with a Redux store

// Create a mock Redux store for testing
const mockStore = configureStore([]);

// Test case to ensure that FavoritesList renders correctly
test("FavoritesList renders correctly", () => {
  // Mock initial state of the Redux store with favorite albums
  const store = mockStore({
    favorites: [
      {
        albumName: "Album 1",
        artistName: "Artist 1",
        releaseDate: "2022-01-01",
      },
      {
        albumName: "Album 2",
        artistName: "Artist 2",
        releaseDate: "2022-02-01",
      },
    ],
  });

  // Render the FavoritesList component with the mock Redux store
  const component = renderer.create(
    <Provider store={store}>
      <FavoritesList />
    </Provider>
  );

  // Convert the rendered component to a JSON tree
  const tree = component.toJSON();

  // Compare the rendered tree with the stored snapshot
  expect(tree).toMatchSnapshot();
});
