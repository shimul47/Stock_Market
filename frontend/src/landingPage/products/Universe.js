import React from "react";

function Universe() {
  // Example logos; replace with actual TradeBangla partner logos
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
      <div className="row text-center">
        <h3>TradeBangla Universe</h3>
        <p className="mb-5">
          Extend your trading and investment experience further with our partner
          platforms
        </p>

        {partners.map((partner, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-sm-12 p-3 mt-4 text-center"
          >
            <img
              src={partner.img}
              alt={partner.name}
              style={{ maxWidth: "80px", height: "auto" }}
            />
            <p className="text-muted mt-3">{partner.description}</p>
          </div>
        ))}

        <div className="w-100 text-center mt-5 mb-5">
          <a href="/signup" className="btn btn-primary btn-lg">
            Signup Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Universe;
