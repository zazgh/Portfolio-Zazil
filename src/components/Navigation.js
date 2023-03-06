import React from "react";

export default function Navigation({
  onClickAbout,
  onClickResume,
  onClickPortfolio,
  onClickContact,
}) {
  return (
    
    <div className="navigationPanel">
      <span>
        <a href="#" onClick={onClickAbout}>
          About
        </a>
      </span>
      <span>
        <a href="#" onClick={onClickResume}>
          Resume
        </a>
      </span>
      <span>
        <a href="#" onClick={onClickPortfolio}>
          Portfolio
        </a>
      </span>
      <span>
        <a href="#" onClick={onClickContact}>
          Contact
        </a>
      </span>
    </div>
  );
}
