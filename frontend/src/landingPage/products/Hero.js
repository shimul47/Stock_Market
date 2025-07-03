import React from "react";

function Hero() {
  return (
    <div className="container  mt-5 border-bottom">
      <div className="row  text-center">
        <h2 className="mb-4">Zerodha Products</h2>
        <h5 className="fs-5">Sleek, modern, and intuitive trading platforms</h5>
        <p className="mb-5">
          Check out our{" "}
          <a style={{ textDecoration: "none" }} href="/">
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
