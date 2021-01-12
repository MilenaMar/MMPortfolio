import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import Skills from "../components/skills"
import aboutStyles from "../styles/about.module.scss"


const AboutPage = () => {
  const data = useStaticQuery(graphql`
  query {
placeholderImage: file(relativePath: { eq: "me.png" }) {
   childImageSharp {
    fluid  {
       ...GatsbyImageSharpFluid_tracedSVG
     }
   }
 }
}
`)

  return (
    <Layout>
    <Metadata title="About" description="A website about who I am"/>
    <div className={aboutStyles.aboutSection}>
    <div className={aboutStyles.firstSection}>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="about me" /> 
    </div>
    <div className={aboutStyles.secondSection}>
    <h1>Hi there, I am Milena</h1>
      <p>
        I am a Full-Stack Web Developer currently living in Ireland.</p>
        <p>I am always learning, practicing and researching new things. I believe you should
    never go to bed without learning something new.
       The two things I love the most besides coding are my dog and Colombian coffee.</p>
      <p> If you want to work wit me go ahead and <Link to="/contact">Contact me.</Link>  <br/> 
        <br/> You can also can find me on <a href="https://www.linkedin.com/in/milena-martinez-caceres/" 
             target="_blank" rel="noreferrer"> 
             LinkedIn
             </a> and check some of my projects on my <a href="https://github.com/MilenaMar"
                 target="_blank" rel="noreferrer">GitHub</a> page.
          </p>   
          <Skills/> 
      </div> 
      
      </div>  
        
    </Layout>
  )
}

export default AboutPage
