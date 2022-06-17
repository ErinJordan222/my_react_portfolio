import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilepic from './About/profilepic.png';


function About() {
    return(
        <section className="">
            <h1 id="about">Erin Jordan</h1>
           
            

            <div className="row">
            <div className="col-4 ip-picture">
            <img src={profilepic} alt="profilepic" className="ip-picture"/>
                </div>
            <div className="col-7 ip-desc">
                <h4>About Me</h4>
                <p>
                I am a client care professional in massage therapy working to
                leverage my existing skills for a new career in web design.
                With over 8 years of experience in assessing clients’ needs and
                designing treatment plans to fit their requirements, 
                I am excited to transition these skills into designing websites 
                for clients. As an enthusiastic communicator and quick learner, 
                I am excited to work on projects’ as a Full Stack Web Developer. 
                </p>
            </div>

            </div>



        </section>


    )
}

export default About;