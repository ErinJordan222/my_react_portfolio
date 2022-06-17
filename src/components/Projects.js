import React from "react";
import github from './Projects/github.png';
import global from './Projects/global.png';
import weather from './Projects/weather.png';
import codequiz from './Projects/codequiz.png';
import readmegenerator from './Projects/readmegenerator.png';
import notetaker from './Projects/notetaker.png';
import schedular from './Projects/schedular.png';
import teamgenerator from './Projects/teamgenerator.png';
import techblog from './Projects/techblog.png';
import groupproject1 from './Projects/groupproject1.png';
import socialnetworkapi from './Projects/socialnetworkapi.png';
import groupproject2 from './Projects/groupproject2.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function Projects() {
  return (
    <div className="card-container col-12">
        <div className="card">
      <h1 className='all-header'>Projects</h1>
      <div className="row">
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={weather} alt="weather_screenshot"></img>
                <h4 className="project-title">Weather Dashboard App</h4>
          <div className="project-icons">
              <a href="https://github.com/ErinJordan222/Weather_Dashboard.git"><img src={github} alt="github_icon"/></a> 
              <a href="https://erinjordan222.github.io/Weather_Dashboard/"><img src={global} alt="global_icon"/></a> 
              </div>
                </div>
                </div>
                </div>
      <div className="row">
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={codequiz} alt="codequiz_screenshot"></img>
                <h4 className="project-title">Javascript Code Quiz</h4>
          <div className="project-icons">
              <a href="https://github.com/ErinJordan222/code_quiz.git"><img src={github} alt="github_icon"/></a> 
              <a href="https://erinjordan222.github.io/code_quiz/"><img src={global} alt="global_icon"/></a>
              </div>
              </div>
                </div>
              <div className="row">
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={readmegenerator} alt="readme generator_screenshot"></img>
                <h4 className="project-title">README Generator</h4>
          <div className="project-icons">
              <a href="https://github.com/ErinJordan222/README_Generator.git"><img src={github} alt="github_icon"/></a> 
              
              </div>
                </div>
                </div>
              <div className="row">
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={notetaker} alt="notetaker_screenshot"></img>
                <h4 className="project-title">Note Taker Express.js App</h4>
          <div className="project-icons">
              <a href="https://github.com/ErinJordan222/Note_Pad_11.git"><img src={github} alt="github_icon"/></a> 
              <a href="https://note-pad-du-11.herokuapp.com/"><img src={global} alt="global_icon"/></a>
              </div>
                </div>
                </div>
              <div className="row">
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={schedular} alt="schedular_screenshot"></img>
                <h4 className="project-title">Scheduling Calendar App</h4>
          <div className="project-icons">
              <a href="https://github.com/ErinJordan222/ScheduleApp.git"><img src={github} alt="github_icon"/></a> 
              <a href="https://erinjordan222.github.io/ScheduleApp/"><img src={global} alt="global_icon"/></a>
              </div>
              </div>
              </div>
              <div className="row">
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={teamgenerator} alt="teamgenerator_screenshot"></img>
                <h4 className="project-title">Team Profile Generator</h4>
          <div className="project-icons">
              <a href="https://github.com/ErinJordan222/Team_Profile_Generator.git"><img src={github} alt="github_icon"/></a> 
              
              </div>
                </div>
                </div>
      <div className="row">
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={techblog} alt="techblog_screenshot"></img>
                <h4 className="project-title">Tech Blog App</h4>
          <div className="project-icons">
              <a href="https://github.com/ErinJordan222/tech-blog.git"><img src={github} alt="github_icon"/></a> 
              <a href="https://tech-blog-du-14-2022.herokuapp.com/"><img src={global} alt="global_icon"/></a>
              </div>
                </div>
                </div>
      <div className="row">
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={groupproject2} alt="groupproject2_screenshot"></img>
                <h4 className="project-title">Group Project- My-Interests Podcast Search App</h4>
          <div className="project-icons">
              <a href="https://github.com/JakeAwsd/my-intrests-project.git"><img src={github} alt="github_icon"/></a> 
              <a href="https://project-2-du-coding-bootcamp.herokuapp.com/"><img src={global} alt="global_icon"/></a>
              </div>
                </div>
                </div>
      <div className="row">
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={socialnetworkapi} alt="socialnetworkapi_screenshot"></img>
                <h4 className="project-title">Social Network API</h4>
          <div className="project-icons">
              <a href="https://github.com/ErinJordan222/Social-Network_API.git"><img src={github} alt="github_icon"/></a> 
              
              </div>
                </div>
                </div>
      <div className="row">
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={groupproject1} alt="groupproject1_screenshot"></img>
                <h4 className="project-title">Group Project- Coder Blog App</h4>
          <div className="project-icons">
              <a href="https://github.com/hugo180/thecoding-blog.git"><img src={github} alt="github_icon"/></a> 
              
              </div>
              </div>
              </div>
              </div>
              </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                
          
                        );
            }


            export default Projects;