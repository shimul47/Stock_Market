import React from "react";

function Education() {
  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-6">
          <img src="media\images\education.svg" style={{ width: "70%" }}></img>
        </div>
        <div className="col-6  mb-5">
          <h2 className="mb-4 fs-2">Free and open market education</h2>
          <p className="mb-2">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advance trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            Bangladesh for all your market related queries.
          </p>
          <a className="mt-2 " href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
