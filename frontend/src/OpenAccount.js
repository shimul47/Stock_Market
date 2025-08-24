import React from "react";

function OpenAccount() {
  return (
    <div className="container text-center py-5">
      <h1 className="mt-5 mb-3">Open a TradeBangla account</h1>
      <p className="mb-4">
        Modern platforms and apps, ৳0 investment, and flat ৳20 intraday and F&O
        trades.
      </p>
      <a
        href="/signup"
        className="btn btn-primary btn-lg px-4"
        style={{ minWidth: "200px" }}
      >
        Signup Now
      </a>
    </div>
  );
}

export default OpenAccount;
