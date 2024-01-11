import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          {/* change color */}
          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "white" : "black"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toogleColor}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Change Color
            </label>
          </div>
          {/* add mode radios */}
          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "white" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.tooglemode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light"
                ? "Enable dark mode"
                : "Enable white mode"}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Navbar",
  home: "Home is here",
};
