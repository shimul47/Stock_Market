import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2 fw-bold">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="fw-semibold text-decoration-none">
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Pricing Boxes */}
        <div className="col-12 col-md-7">
          <div className="row text-center g-3">
            <div className="col-12 col-sm-6">
              <div className="p-4 border rounded h-100 shadow-sm">
                <h1 className="mb-2 fw-bold">৳0</h1>
                <p className="mb-0 text-muted">
                  Free equity delivery and
                  <br />
                  direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="p-4 border rounded h-100 shadow-sm">
                <h1 className="mb-2 fw-bold">৳20</h1>
                <p className="mb-0 text-muted">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
