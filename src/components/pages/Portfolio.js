import React from "react";
import PortfolioCard from "../PortfolioCard";
import project1 from "../../assets/project1.png";
import noteTaker from "../../assets/noteTaker.png";
import myTeam from "../../assets/myTeam.png";
import reviewWorld from "../../assets/reviewWorld.png";



export default function Portfolio({ isHidden }) {
    return (
        <div className={ isHidden ? " Hidden" : "portfolioList"}>

<PortfolioCard
title="Streamosaurus"
image={project1}
text="A web site tool that allows you to find where your a specific movie or tv show is streaming.We wanted to make something that's easy to use and has an appealing display. We learn how to build a web site that uses server side APIs from scratch. To experience working in a team of web developers."
repourl="https://github.com/wabarringer/project-1"
demourl="https://wabarringer.github.io/project-1/"
className="card1">
</PortfolioCard>


<PortfolioCard
title="Note Taker"
image={noteTaker}
text="Note Taker is going to be used by the user to write and save notes. Application use express.js back end, saving and retrieving data from a JSON file."
repourl="https://github.com/zazgh/11-Note-Taker"
demourl="https://zazilnotes.herokuapp.com/"
className="card2">
</PortfolioCard>


<PortfolioCard
title="Team"
image={myTeam}
text="Aplication that generate a webpage that displays my team's basic info SO THAT I have quick access to their emails and GitHub profiles"
repourl="https://github.com/zazgh/oop-team-profile-generator"
demourl="https://github.com/zazgh/oop-team-profile-generator"
className="card3">
</PortfolioCard>


<PortfolioCard
title="Review World"
image={reviewWorld}
text="A user can view and add reviews to this website. A user will have to create an account or login to an existing one. When user is logged in, it has acces to the dasboard to add reviews to the website. User can easlily logout."
repourl="https://github.com/hornickjohn/review-world"
demourl="https://zaz-review-world.herokuapp.com/review"
className="card4">
</PortfolioCard>


            <a href=""></a>


        </div>
    )
}