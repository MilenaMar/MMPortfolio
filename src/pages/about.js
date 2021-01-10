import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import Skills from "../components/skills"

const AboutPage = () => {
  return (
    <Layout>
    <Metadata title="About" description="A website about who I am"/>
      <p>
        I am a Colombian living in ireland for the last 5 years.
        Dog and coffe lover
        <br />
        passionate about technology and always developing my skills
        I love to keep learning, challenging myself 

      </p>
      <p>Hi, I am Milena a Full-Stack developer, living in Ireland <br/>
          If you want to work wit me go ahead and <Link to="/contact">contact me</Link>  <br/> 
          Together we can make things happen</p>
      
            <p>
        Lets Work together <Link to="/contact">Contact Me</Link>
      </p>
      <Skills/>
    </Layout>
  )
}

export default AboutPage
