import React from "react";

function Hero() {
  return (
    <div className="container mt-5 border-bottom">
      {/* Header */}
      <div className="row text-center mb-5">
        <h1>Pricing</h1>
        <h5 className="fs-5 text-muted">
          Free equity investments and flat ৳20 intraday and F&O trades
        </h5>
      </div>

      {/* Pricing Cards */}
      <div className="row text-center g-4">
        {/* Free Equity Delivery */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
            src="media/images/pricing0.png"
            alt="Free equity delivery"
            className="img-fluid mb-3"
          />
          <h3 className="fs-4">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely fee-free –
            0 brokerage.
          </p>
        </div>

        {/* Intraday and F&O Trades */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
            src="media/images/pricing0.png"
            alt="Intraday and F&O trades"
            className="img-fluid mb-3"
          />
          <h3 className="fs-4">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ৳20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        {/* Free Direct MF */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
            src="media/images/pricing0.png"
            alt="Free direct mutual funds"
            className="img-fluid mb-3"
          />
          <h3 className="fs-4">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free – 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
