import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; // Import Provider from React Redux for providing the store to components
import store from "./store/store"; // Import the Redux store
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for handling React Router in the app

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* BrowserRouter for enabling React Router */}
    <BrowserRouter>
      {/* Redux Provider for passing the store down the component tree */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
