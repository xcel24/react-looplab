import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <div className="container">
            <button
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/">
              <a className="navbar-brand">LoopLAB</a>
            </Link>

            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/">
                    {" "}
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/explore">
                    {" "}
                    <a className="nav-link">Explore</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/create">
                    {" "}
                    <a className="nav-link">Create</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/share">
                    {" "}
                    <a className="nav-link">Share</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
