import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", margin: "150px" }}>
      <h2>
        Error 404 <br /> Content Not found
      </h2>
      <h4>
        To back to the homepage{" "}
        <Link exact to="/">
          Click here
        </Link>
      </h4>
    </div>
  );
};

export default NotFound;
