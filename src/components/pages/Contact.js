import React from 'react';
import email from './Contact/email.png';
import linkedin from './Contact/linkedin.png';
import cellphone from './Contact/cellphone.png';
import github from './Contact/github.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    

    return (
        <section>
 <h1 className="contact">Contact Me</h1>
 <div className="contact-container">
 <div className="wrapper">
 <a href="mailto:erinjordan2790@gmail.com"><img src={email} alt="email_icon"/></a>
 <a href="https://www.linkedin.com/in/erin-jordan-6b58a51a0/"><img src={linkedin} alt="linkedin_icon"/></a>
 <a href="tel:8104447591"><img src={cellphone} alt="phone_icon"/></a>
 <a href="https://github.com/ErinJordan222"><img src={github} alt="github_icon"/></a>
     
     
     
    

     
</div>
 

</div>



        </section>
    )
}

export default Contact