import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-danger mb-3 py-0">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-plus"></i>
          {props.branding}
        </Link>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fas fa-home"></i>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact/add">
              <i className="fas fa-plus"></i>
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <i className="fas fa-question"></i>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: "Contact Manager",
};

Header.propTypes = {
  branding: PropType.string.isRequired,
};
export default Header;
