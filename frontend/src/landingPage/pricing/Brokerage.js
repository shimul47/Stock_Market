import React from "react";

function Brokerage() {
  return (
    <div className="container mb-4">
      <div className="row p-4 mt-5  border-top">
        <div className="col-8 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-3 ">Brokerage Calculator</h3>
            <ul
              className="text-muted p-4 "
              style={{
                lineHeight: "2.5",
                textAlign: "left",
              }}
            >
              <li>Rise, fall, learn, repeat </li>
              <li>Even the darkest night ends in dawn</li>
              <li>Less talk, more action</li>
              <li>Broken but still breathing</li>
              <li>Dream big, start small</li>
              <li>Not today, doubt</li>
              <li>Peace begins with pause</li>
            </ul>
          </a>
        </div>
        <div className="col-4 p-2">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-3 mb-4">List of charges</h3>
            <ul
              className="text-muted"
              style={{ lineHeight: "2.5", textAlign: "left" }}
            >
              <li>Lost, maybe just exploring</li>
              <li>Hustle silently, win loudly</li>
              <li>Kindness is never wasted</li>
              <li>Silence speaks the loudest</li>
              <li>Time reveals true faces</li>
              <li>Pain shapes the strongest souls</li>
              <li>Small steps lead to big change</li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
