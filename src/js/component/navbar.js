import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="ms-auto">
        <Link to="/newcontact">
          <button className="btn btn-success new-contact-button">
            Add a Contact
          </button>
        </Link>
      </div>
    </nav>
  );
};