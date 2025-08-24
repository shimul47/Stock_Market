import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <div>
      <Hero />

      <div className="container my-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <LeftSection
              imageURL="media/images/kite.png"
              productName="Kite"
              productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
              tryDemo="Try demo"
            />
          </div>
          <div className="col-md-6 d-none d-md-block"></div>{" "}
          {/* Empty for alignment */}
        </div>

        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <RightSection
              imageURL="media/images/console.png"
              productName="Console"
              productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
              tryDemo="Console"
            />
          </div>
          <div className="col-md-6 d-none d-md-block"></div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <LeftSection
              imageURL="media/images/coin.png"
              productName="Coin"
              productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
              tryDemo="Coin"
            />
          </div>
          <div className="col-md-6 d-none d-md-block"></div>
        </div>

        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <RightSection
              imageURL="media/images/kiteconnect.png"
              productName="Kite Connect API"
              productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
              tryDemo="Kite Connect"
            />
          </div>
          <div className="col-md-6 d-none d-md-block"></div>
        </div>

        <p className="text-center mt-5 mb-5">
          Want to know more about our technology stack? Check out the{" "}
          <a style={{ textDecoration: "none" }} href="">
            TradeBangla.tech blog{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>

        <Universe />
      </div>
    </div>
  );
}

export default ProductsPage;
