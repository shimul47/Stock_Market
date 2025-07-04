import React from "react";

function Hero() {
  return (
    <div className="container  mt-5 border-bottom">
      <div className="row  text-center">
        <h1 className="mb-5">Pricing</h1>
        <h5 className="fs-5 text-muted mb-5 ">
          Free equity investments and flat 20 traday and F&O trades
        </h5>
      </div>
      <div className="row p-4 mt-5 text-center">
        <div className="col-4">
          <img src="media/images/pricingEquity.svg"></img>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely fee - 0
            brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg"></img>
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            inraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricingEquity.svg"></img>
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free - 0
            commisions & DP chrages.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
