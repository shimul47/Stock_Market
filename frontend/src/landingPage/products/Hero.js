import React from "react";

function Hero() {
  return (
    <div className="container mt-5 pb-5 border-bottom">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-8">
          <h2 className="mb-3 fw-bold">TradeBangla Products</h2>
          <h5 className="fs-5 mb-3 text-muted">
            Sleek, modern, and intuitive trading platforms
          </h5>
          <p className="mb-4">
            Check out our{" "}
            <a
              href="/"
              className="fw-semibold text-decoration-none"
              style={{ color: "#0d6efd" }}
            >
              investment offerings{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
