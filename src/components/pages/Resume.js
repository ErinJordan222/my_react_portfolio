import React from "react";
import document from './Resume/document.png';
import css from './Resume/css.png';
import html from './Resume/html.png';
import js from './Resume/js.png';

const Resume = () => (
    <div>
        <h1 className="resume-list">Resume</h1>

        <div className="resume-link">
        <a href="https://docs.google.com/document/d/18Pn1AhG1UqE-DTjAZ8Akk-5OmIOflbFkg3u6J7HJ3Cc/edit"><img src={document} alt="document_icon"/></a>
        </div>

        <h2 class="cover-letter">Cover Letter
        </h2>
        <p>Web Designer & Developer based in Denver, Colorado.
      Experience in designing & developing custom websites.
      Completed coursework for HTML, CSS, & Javascript.
      As well as MySQL, Workbench, Insomnia & Mongoose
      through Denver University- Bootcamp Coding.</p>
    
      <h2 class="education-section">My Education</h2>
        
        <h4 className="education-list">
      <p>University of Denver Coding Bootcamp: Denver, CO December 2021- June 2022</p>
      <p>Flint School of Theraputic Massage: Flint, MI April 2014- October 2014</p>
      <p>Grand Blanc High School: Grand Blanc, MI 2004-2008</p>
      </h4>

    <div>
        <h2 className="skills-section">Skills: </h2>
        <h4 className="skills-list">
        <img src={css} alt="css logo" className="skillslist"/>
        <img src={html} alt="html logo" className="slillslist"/>
        <img src={js} alt="js logo" className="skillslist"/>
        <p>HTML, Bootstrap, CSS Flexbox, Bulma (CSS Framework)</p> 
            <p>Javascript, JSON, Node.js, Express.js, React.js</p> 
            <p>MySQL, Workbench, Insomnia, E-Commerce</p> 
            <p>7+ years of experience managing clients & 
                tailoring treatment plans to fit customer needs.</p> 
            <p>Time management, empathetic listening, personable communications.</p>
            </h4>
           
    </div>
    </div>
);


export default Resume;