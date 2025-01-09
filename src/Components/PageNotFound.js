import React from "react";
import "../css/login.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container-fluid text-center mt-5 mx-auto">
      <div className="row">
        <div className="col">
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead">
            Sorry, the page you are looking for does not exist.
          </p>
          <NavLink to="/dashboard" className="p-2 mt-4 lg-btn">
            Go to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
