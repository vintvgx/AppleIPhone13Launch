import React from "react";

function Header() {
  return (
    <nav className="navbar sticky-top navbar-dark navar-expand-lg bg-dark">
      <div class="container barNav">
        <ul className="nav nav-pills mx-auto">
          <a className="navbar-brand" href="#S2">
            Bermuda
          </a>
          <li className="nav-item nav-pills nav-fill">
            <a className="nav-link" href="#S2">
              MAC
            </a>
          </li>
          <li className="nav-item" href="#S2">
            <a className="nav-link">IPhone</a>
          </li>
          <li className="nav-item" href="#S2">
            <a className="nav-link">Watch</a>
          </li>
          <li className="nav-item" href="#S2">
            <a className="nav-link">TV</a>
          </li>
          <li className="nav-item" href="#S2">
            <a className="nav-link">Music</a>
          </li>
          <li className="nav-item" href="#S2">
            <a className="nav-link">Support</a>
          </li>
          <li className="nav-item" href="#S2">
            <a className="nav-link">(Search)</a>
          </li>
          <li className="nav-item" href="#S2">
            <a className="nav-link">(Cart)</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
