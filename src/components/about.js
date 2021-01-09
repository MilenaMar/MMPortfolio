import React from 'react';
import aboutStyles from "../styles/about.module.scss"
import Me from "../../static/me.png"
import { Link } from 'gatsby';


const AboutMe = ()=> {
    return (
        <div className={aboutStyles.aboutSection}>
        <div>
         <h2>About Me</h2>
         <img src={Me} alt="about me section"/>
         <p>Hi, I am Milena a Full-Stack developer, living in Ireland <br/>
          If you want to work wit me go ahead and <Link to="/contact">contact me</Link>  <br/> 
          Together we can make things happen</p>
         </div>
        </div>
    )
}
export default AboutMe;