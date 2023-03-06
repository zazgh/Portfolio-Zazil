import React from "react";

export default function PortfolioCard({ image, text, demourl, repourl, title }) {
  return (
    <div className="portfolioCard cardBorder">
      <div className="portfolioCardLeftColumn">

        <a target="_blank" href={demourl}>
          <img className="" src={image} />
        </a>
      </div>
      <div className="portfolioCardRightColumn">
        <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <p>
            You can find repository <a target="_blank" href={repourl}>here</a>
             </p>
             

        </div>
      </div>
    </div>
  );
}
