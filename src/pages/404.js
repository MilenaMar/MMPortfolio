import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"



const NotfoundPage = () => {

const data = useStaticQuery(graphql`
query {
placeholderImage: file(relativePath: { eq: "404.png" }) {
 childImageSharp {
  fluid  {
     ...GatsbyImageSharpFluid_tracedSVG
   }
 }
}
}
`)
return (
    <div>
        <h1>Ups Page not Found</h1>
        <p>What you are looking for can not be found</p>
        <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="lady coder"
       /> 
    </div>
)
}

export default NotfoundPage;