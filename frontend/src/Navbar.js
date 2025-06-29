import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container py-2">
        <a className="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ maxWidth: "200px", height: "auto" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
