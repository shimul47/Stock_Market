import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row p-5 mb-5 mt-5">
        <h1 className="fs-3 text-center">
          We pioneered the discount broking model in Bangladesh
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* Content */}
      <div
        className="row p-5 mt-5 border-top text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        {/* Left column */}
        <div className="col-md-6 col-12 p-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in
            Bangladesh in terms of cost, support, and technology. We named the
            company <b>TradeBangla</b>, representing our mission to simplify and
            democratize investing.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us one of the fastest-growing stock brokers in Bangladesh.
          </p>
          <p>
            Over <b>10+ lakh clients</b> place thousands of orders every day
            through our powerful ecosystem of investment platforms, contributing
            significantly to the trading volumes of the{" "}
            <b>Dhaka Stock Exchange (DSE)</b> and{" "}
            <b>Chittagong Stock Exchange (CSE)</b>.
          </p>
        </div>

        {/* Right column */}
        <div className="col-md-6 col-12 p-5">
          <p>
            In addition, we run a number of popular online educational and
            community initiatives to empower retail traders and investors across
            Bangladesh.
          </p>
          <p>
            <a href="#" style={{ textDecoration: "none" }}>
              TradeBangla Ventures
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Bangladeshi capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              blog
            </a>{" "}
            or see what the media is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
