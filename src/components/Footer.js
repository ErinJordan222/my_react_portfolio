import React from "react";
import github from './Footer/github.png';
import twitter from './Footer/twitter.png';
import linkedin from './Footer/linkedin.png';


function Footer() {

    return (
            <>
        <div className="footer">
            <a href="https://github.com/ErinJordan222"><img src={github} alt="github_icon"/></a>
            <a href="https://twitter.com/ErinJordan222"><img src={twitter} alt="twitter_icon"/></a>
            <a href="https://www.linkedin.com/in/erin-jordan-6b58a51a0/"><img src={linkedin} alt="linkedin_icon"/></a>
            

        </div>
        </>
    );
}

export default Footer;