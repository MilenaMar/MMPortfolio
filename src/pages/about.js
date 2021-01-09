import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import AboutImage from "../../static/about.png"
import Metadata from "../components/metadata"

const AboutPage = () => {
  return (
    <Layout>
    <Metadata title="About" description="A website about who I am"/>
    <img src={AboutImage} alt="about-illustration" style={{width:"300px"}}></img>
      <h1>This a Page about me</h1>
      <p>
        I am a Colombian living in ireland for the last 5 years.
        Dog and coffe lover
        <br />
        passionate about technology and always developing my skills
        I love to keep learning, challenging myself 

      </p>
      <p>
        Lets Work together <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
