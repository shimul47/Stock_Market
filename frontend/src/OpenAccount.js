import React from "react";
function OpenAccount() {
  return (
    <div className="container p-5 text-center">
      <h1 className="mt-5">Open a Zerodha account</h1>
      <p>
        Modern platforms and apps, ৳0 investment, and flat ৳20 intraday and F&O
        trades.
      </p>
      <button
        className="p-2 btn btn-primary fs-5"
        style={{ width: "20%", margin: "0 auto" }}
      >
        <a href="signup" style={{ textDecoration: "none", color: "white" }}>
          Signup Now
        </a>
      </button>
    </div>
  );
}

export default OpenAccount;
