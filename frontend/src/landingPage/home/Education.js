import React from "react";

function Education() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h2 className="mb-4 fs-2 text-center text-md-start">
            Free and open market education
          </h2>
          <p className="mb-3 text-muted text-center text-md-start">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <div className="text-center text-md-start">
            <a href="#" className="fw-semibold text-decoration-none">
              Varsity{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <p className="mt-5 mb-3 text-muted text-center text-md-start">
            TradingQ&A, the most active trading and investment community in
            Bangladesh for all your market related queries.
          </p>
          <div className="text-center text-md-start">
            <a href="#" className="fw-semibold text-decoration-none">
              TradingQ&A{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
