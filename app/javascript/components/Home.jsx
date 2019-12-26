import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Clients map</h1>
        <p className="lead">
          A map of clients (merchants and partners) of InComm.
        </p>
        <hr className="my-4" />
        <Link
          to="/merchants"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Merchants
        </Link>
        <Link
          to="/partners"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Partners
        </Link>
      </div>
    </div>
  </div>
);