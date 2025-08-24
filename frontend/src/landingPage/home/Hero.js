import React from "react";

function Hero() {
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        {/* Hero Image */}
        <div className="col-12 mb-4">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>

        {/* Hero Text */}
        <div className="col-12">
          <h1 className="fw-bold display-5">Invest in everything</h1>
          <p className="lead text-muted mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>

          {/* CTA Button */}
          <a
            href="/signup"
            className="btn btn-primary btn-lg px-5 py-2"
            style={{ borderRadius: "30px" }}
          >
            Signup Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
