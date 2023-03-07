import React from "react";
import resumeAsset from "../../assets/zazilresume.pdf";
import courseraCert from "../../assets/Coursera.pdf";

export default function Resume ({ isHidden }) {
    return (
        <div className={ isHidden ? " Hidden" : "portfolioCard cardBorder"}>
            <h1>Resume</h1>
            My resume can be downloaded <a href={resumeAsset}>here</a>

            <h1>Google Project Management</h1>
            My Google Project Management Certificate can be downloaded <a href={courseraCert }>here</a>


        </div>
    )
}