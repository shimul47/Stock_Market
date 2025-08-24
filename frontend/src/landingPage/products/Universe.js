import React from "react";

function Universe() {
  const partners = [
    {
      name: "InvestBangla",
      description: "Thematic investment platform",
      img: "media/images/smallcaseLogo.png",
    },
    {
      name: "Dhaka Stocks",
      description: "Stock market insights",
      img: "media/images/smallcaseLogo.png",
    },
    {
      name: "BanglaFunds",
      description: "Mutual fund platform",
      img: "media/images/smallcaseLogo.png",
    },
    {
      name: "TradingHub",
      description: "Trader community platform",
      img: "media/images/smallcaseLogo.png",
    },
    {
      name: "SmartInvest",
      description: "Robo-advisory platform",
      img: "media/images/smallcaseLogo.png",
    },
    {
      name: "MarketWatch",
      description: "Market analytics platform",
      img: "media/images/smallcaseLogo.png",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h3>TradeBangla Universe</h3>
        <p>
          Extend your trading and investment experience further with our partner
          platforms
        </p>
      </div>

      <div className="row justify-content-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex flex-column align-items-center"
          >
            <img
              src={partner.img}
              alt={partner.name}
              className="img-fluid"
              style={{ maxWidth: "80px" }}
            />
            <p className="text-muted mt-3 text-center">{partner.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-5 mb-5">
        <a href="/signup" className="btn btn-primary btn-lg">
          Signup Now
        </a>
      </div>
    </div>
  );
}

export default Universe;
