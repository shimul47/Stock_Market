import React from "react";

function CreateTicket() {
  // Topics and links
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
    // Add more topics here
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center mb-5">
          To create a ticket, select a relevant topic
        </h1>

        {topics.map((topic, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 p-3">
            <h4>
              <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
              {topic.title}
            </h4>
            {topic.links.map((link, idx) => (
              <p key={idx} className="mb-2">
                <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>
                  {link}
                </a>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
