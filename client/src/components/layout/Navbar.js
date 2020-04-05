import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/vabgo1.png";

class Navbar extends Component {
  render() {
    return (
      <nav class="nav-extended">
        <div class="white">
          <a href="/" class="brand-logo">
            <img src={logo} alt="Logo" />;
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/register" className="red-text">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="blue-text">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
