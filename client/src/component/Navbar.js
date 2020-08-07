import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <div className="nav">
          <Link to="/" className="brand-logo left">
            CAMAP
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/create-post">New post</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
