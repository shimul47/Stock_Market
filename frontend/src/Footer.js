import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5 gy-4">
          <div className="col-md-3 col-12 text-center text-md-start">
            <img
              src="media/images/mainlogo.png"
              style={{ width: "60%", maxWidth: "180px" }}
              alt="TradeBangla Logo"
            />
            <p className="mt-3">
              &copy; 2025 - Present, TradeBangla Securities Ltd. All rights
              reserved.
            </p>
          </div>

          <div className="col-md-3 col-6">
            <p className="fw-bold">Company</p>
            <ul className="list-unstyled">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Referral Programme</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">TradeBangla.tech</a>
              </li>
              <li>
                <a href="#">Press & Media</a>
              </li>
              <li>
                <a href="#">CSR Initiatives</a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-3 col-6">
            <p className="fw-bold">Support</p>
            <ul className="list-unstyled">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Support Portal</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">List of Charges</a>
              </li>
              <li>
                <a href="#">Downloads & Resources</a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-md-3 col-6">
            <p className="fw-bold">Account</p>
            <ul className="list-unstyled">
              <li>
                <a href="#">Open an Account</a>
              </li>
              <li>
                <a href="#">Fund Transfer</a>
              </li>
              <li>
                <a href="#">Investment Plans</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Disclaimer */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            TradeBangla Securities Ltd.: Member of Dhaka Stock Exchange (DSE) &
            Chittagong Stock Exchange (CSE) – Registration no.: BD-INZ-000123.
            Central Depository services through CDBL – Registration no.:
            CDBL-56789. Registered Address: TradeBangla Securities Ltd., Gulshan
            Avenue, Dhaka - 1212, Bangladesh. For any complaints pertaining to
            securities broking please write to{" "}
            <a href="mailto:complaints@tradebangla.com">
              complaints@tradebangla.com
            </a>
            . For DP related issues:{" "}
            <a href="mailto:dp@tradebangla.com">dp@tradebangla.com</a>.
          </p>

          <p>
            Procedure to file a complaint with Bangladesh Securities and
            Exchange Commission (BSEC): Register on the BSEC complaint portal.
            Mandatory details for filing complaints: Name, NID, Address, Mobile
            Number, Email ID. Benefits: Effective Communication and Speedy
            redressal of grievances.
          </p>

          <p>
            Investments in the capital market are subject to market risks; read
            all related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is mandatory when dealing in the capital market. If
            you are subscribing to an IPO, there is no need to issue a cheque.
            Please use your bank account to authorize payment. In case of
            non-allotment the funds will remain in your bank account. As a
            business we don't give stock tips, and have not authorized anyone to
            trade on behalf of others. If you find anyone claiming to be part of
            TradeBangla and offering such services, please report it to us
            immediately."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
