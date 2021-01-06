import React from "react"
import {Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"
import homeStyles from "../styles/index.module.scss"


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
  <div className={homeStyles.welcomeContainer}>
  <div className={homeStyles.description}>
  <h1 className={homeStyles.nameFont}>Milena Martinez</h1>
  <h2>Web Developer</h2>
  </div>
  <div className={homeStyles.imageHomepage}>
  <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="lady coder"
       /> 
  </div>    
  </div>
      <Link to="/about">About me</Link>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
  </Layout>
)
}

export default IndexPage;