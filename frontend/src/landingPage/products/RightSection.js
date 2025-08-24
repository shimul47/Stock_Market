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
      <div className="row align-items-center mt-5">
        {/* Text Section */}
        <div className="col-12 col-md-6 order-2 order-md-1">
          <h1 className="mb-4">{productName}</h1>
          <p className="text-muted" style={{ maxWidth: "80%" }}>
            {productDescription}
          </p>

          {/* Links */}
          <div className="mt-4 d-flex flex-column flex-sm-row gap-4">
            <a className="fw-semibold text-decoration-none" href={tryDemo}>
              Try Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a className="fw-semibold text-decoration-none" href={learnMore}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Store Badges */}
          <div className="mt-5 d-flex flex-column flex-sm-row gap-3">
            <a href={googlePay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: "160px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxWidth: "160px" }}
              />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "85%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
