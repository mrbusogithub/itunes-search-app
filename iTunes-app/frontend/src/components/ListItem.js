import React from "react"; // Import React from React library
import Button from "react-bootstrap/Button"; // Import the Button component from the react-bootstrap library
import "./ListItem.css"; // Import the ListItem.css file for styling

// ListItem component displays individual items in a list
const ListItem = ({ item, onButtonClick, buttonText }) => (
  <li
    className="list-group-item d-flex justify-content-between align-items-center"
    style={{ backgroundColor: "lightblue", borderRadius: "5px" }}
  >
    {/* Display album cover */}
    <img
      src={item.albumCover}
      alt="Album Cover"
      className="mr-3 rounded ms-3"
    />
    <div className="content" style={{ color: "dimgray" }}>
      {/* Display album details */}
      <p>{item.albumName}</p>
      <p>{item.artistName}</p>
      <p>{item.releaseDate}</p>
    </div>
    {/* Button for user interaction */}
    <Button className="btn btn-primary" onClick={() => onButtonClick(item)}>
      {buttonText}
    </Button>
  </li>
);

export default ListItem;
