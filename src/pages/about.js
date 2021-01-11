import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import Skills from "../components/skills"
import myPicture from "../../static/me.png"
import aboutStyles from "../styles/about.module.scss"


const AboutPage = () => {
  return (
    <Layout>
    <Metadata title="About" description="A website about who I am"/>
    <div className={aboutStyles.aboutSection}>
    <div className={aboutStyles.firstSection}>
      <img src={myPicture} alt="Milena Martinez" className={aboutStyles.myProfilePicture}/>
    </div>
    <div className={aboutStyles.secondSection}>
    <h1>Hi there, I am Milena</h1>
      <p>
        I am a Full-Stack Web Developer currently living in Ireland.</p>
        <p>I am always learning, practicing and researching new things.<br/>
         I believe the capacity of being constantly amazed by our surroundings is what keep us going,
       <strong>"Never go to bed without learning something new".</strong> </p>
       <p>
       The two things I love the most besides coding are my dog and Colombian coffee.
      </p>
      <p> If you want to work wit me go ahead and <Link to="/contact">Contact me.</Link>  <br/> 
         You can also can find me on <a href="https://www.linkedin.com/in/milena-martinez-caceres/" 
             target="_blank" rel="noreferrer"> 
             LinkedIn
             </a> and check some of my projects on my <a href="https://github.com/MilenaMar"
                 target="_blank" rel="noreferrer">GitHub</a> page.
          </p>   
      </div> 
      </div>  
      <Skills/>   
    </Layout>
  )
}

export default AboutPage
