import React from "react";
import profilepic from "../../assets/profilepic.png";
//import Image from '../images/index';

//<img src={avatar} alt="Avatar" />
export default function About({ isHidden }) {
  return (
    <main className={isHidden ? "Hidden" : "portfolioCard cardBorder aboutCard"}>
      <div className="portfolioCardRightColumn">
        <div>
          <h1>Zazil Gomez</h1>

          <p>
            Hello! I am Zazil Gomez, a Seattle based full stack web development
            student at University of Washington.
          </p>
          <p>
            Coming from a background in sales and customer service, I love
            creating pages where I’m able to create enjoyable
            interactions and experiences for everyone! And with UW full stack
            web development bootcamp education and support, I’m now able to
            truly call myself a full stack Developer.
          </p>
          <p>
            I am excited to continue refining my skills with the right company.
            Send me a message if you want to know more about me!
          </p>
        </div>
      </div>

      <div className="portfolioCardLeftColumn">
        <img src={profilepic} alt="Profile picture" />
      </div>
    </main>
  );
}
