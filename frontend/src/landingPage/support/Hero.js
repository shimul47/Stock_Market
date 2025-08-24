import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top Wrapper */}
      <div
        className="d-flex justify-content-between align-items-center p-3 border-bottom"
        id="supportWrapper"
      >
        <h4 className="mb-0">Support Portal</h4>
        <a href="#" className="btn btn-outline-primary btn-sm">
          Track Tickets
        </a>
      </div>

      {/* Main Content */}
      <div className="row p-3 g-4">
        {/* Search & Help Topics */}
        <div className="col-lg-6 col-md-12">
          <h1 className="fs-4 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            className="form-control mb-3"
          />

          <div className="d-flex flex-wrap gap-2">
            <a href="#" className="btn btn-outline-secondary btn-sm">
              Track account opening
            </a>
            <a href="#" className="btn btn-outline-secondary btn-sm">
              Track segment activation
            </a>
            <a href="#" className="btn btn-outline-secondary btn-sm">
              Intraday margins
            </a>
            <a href="#" className="btn btn-outline-secondary btn-sm">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Featured Section */}
        <div className="col-lg-6 col-md-12">
          <h1 className="fs-4 mb-3">Featured</h1>
          <ol className="ps-3">
            <li className="mb-2">
              <a href="#" className="text-decoration-none">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
