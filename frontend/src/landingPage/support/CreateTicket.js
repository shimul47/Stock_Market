import React from "react";

function CreateTicket() {
  const topics = [
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "NRI Account Opening",
        "Charges at TradeBangla",
        "TradeBangla IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Deposits & Withdrawals",
      links: [
        "Deposit Money",
        "Withdraw Funds",
        "Bank Integration",
        "Transaction History",
        "Charges",
        "Settlement Process",
      ],
    },
    {
      title: "Trading & Investments",
      links: [
        "Placing Orders",
        "Margin & Leverage",
        "Trading Platforms",
        "Investment Options",
        "Portfolio Management",
        "Risk Management",
      ],
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="fs-2 text-center mb-5">
        To create a ticket, select a relevant topic
      </h1>

      <div className="row g-4">
        {topics.map((topic, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100 shadow-sm p-3">
              <h4 className="mb-3">
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                {topic.title}
              </h4>
              <div className="d-flex flex-column gap-2">
                {topic.links.map((link, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-decoration-none text-primary"
                    style={{ lineHeight: "1.8" }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
