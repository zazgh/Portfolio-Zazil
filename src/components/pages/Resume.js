import React from "react";
import resumeAsset from "../../assets/resume.pdf";


export default function Resume ({ isHidden }) {
    return (
        <div className={ isHidden ? " Hidden" : "portfolioCard cardBorder"}>
            <h1>Resume</h1>
            My resume can be downloaded <a href={resumeAsset}>here</a>


        </div>
    )
}