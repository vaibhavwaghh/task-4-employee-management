// NotFound.js
import React from "react";
import "./../styles/NotFound.css"; // Import the styles

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="error-heading">404 - Not Found</h1>
      <p className="error-message">
        The page you are looking for does not exist
      </p>
    </div>
  );
};

export default NotFound;
