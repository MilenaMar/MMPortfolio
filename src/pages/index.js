import React from "react"
import {Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"
import homeStyles from "../styles/index.module.scss"
import Metadata from "../components/metadata"
import Skills from "../components/skills"
import AboutMe from "../components/about"


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
  placeholderImage: file(relativePath: { eq: "homepage.png" }) {
     childImageSharp {
      fluid  {
         ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
  }
  `)
return (
  <Layout >
  <Metadata title="Home" description="Web Developer Milena Martinez " />
  <div className={homeStyles.welcomeContainer}>
  <div className={homeStyles.description}>
  <h2 className={homeStyles.nameFont}>Milena</h2>
  <h2 className={homeStyles.nameFont}>Martinez</h2>
  <p className={homeStyles.aboutMeFont}>Full-Stack Developer. <br/>Always amazed to see how technology can impact people’s life.
</p>
<button><Link to="/contact">Work together</Link></button>
  </div>
  <div className={homeStyles.imageHomepage}>
  <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="lady coder" /> 
  </div>    
  </div>
  <AboutMe/>
    <Skills />
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
  </Layout>
)
}

export default IndexPage;