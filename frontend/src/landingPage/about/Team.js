import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center mt-5">Our People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        {/* Profile Image and Name */}
        <div className="col-md-4 col-sm-12 p-3 text-center">
          <img
            src="media/images/shimulbhai.png"
            alt="Sohanur Rahman"
            style={{ borderRadius: "50%", width: "60%", maxWidth: "200px" }}
          />
          <h4 className="mt-3">Sohanur Rahman</h4>
          <h6>Founder & CEO</h6>
        </div>

        {/* Profile Description */}
        <div className="col-md-8 col-sm-12 p-3">
          <p>
            Sohanur founded <strong>TradeBangla</strong> in 2025 to overcome
            challenges he faced during his years as a trader in Bangladesh.
            Today, TradeBangla is reshaping the landscape of online trading in
            the country.
          </p>
          <p>
            He actively contributes to financial advisory boards in Bangladesh
            and promotes investor education across the nation.
          </p>
          <p>
            When not trading, he enjoys playing basketball and exploring Dhaka's
            vibrant culture.
          </p>
          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradeBangla Forum
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
