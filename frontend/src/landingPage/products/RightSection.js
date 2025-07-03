import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 mt-5">
          <h1 className="mt-5 mb-4">{productName}</h1>
          <p style={{ width: "60%" }}>
            {productDescription}
            <div className="mt-4">
              <a style={{ textDecoration: "none" }} href={tryDemo}>
                {tryDemo}{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              <a
                href={learnMore}
                style={{ marginLeft: "50px", textDecoration: "none" }}
              >
                Learn More{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            <div className="mt-5">
              <a href={googlePay}>
                <img src="media\images\googlePlayBadge.svg"></img>
              </a>

              <a href={appStore} style={{ marginLeft: "25px" }}>
                <img src="media\images\appstoreBadge.svg"></img>
              </a>
            </div>
          </p>
        </div>
        <div className="col-6 mt-5 ">
          <img src={imageURL} style={{ width: "85%" }}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
