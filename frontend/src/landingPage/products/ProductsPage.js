import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media\images\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        learnMore=""
        googlePay=""
        appStore=""
      />
      <RightSection
        imageURL="media\images\console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="Console"
        learnMore=""
        googlePay=""
        appStore=""
      />
      <LeftSection
        imageURL="media\images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore=""
        googlePay=""
        appStore=""
      />
      <RightSection
        imageURL="media\images\kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Kite Connect"
        learnMore=""
        googlePay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a style={{ textDecoration: "none" }} href="">
          Zerodha.tech blog{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
      <Universe />
    </div>
  );
}

export default ProductsPage;
