import React from "react"
import {Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"
import homeStyles from "../styles/index.module.scss"
import Metadata from "../components/metadata"


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
  <h2>Web Developer</h2>
  </div>
  <div className={homeStyles.imageHomepage}>
  <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="lady coder" /> 
  </div>    
  </div>
      <Link to="/about">About me</Link>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
  </Layout>
)
}

export default IndexPage;