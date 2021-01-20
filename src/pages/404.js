import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components';

const ErrorStyle = styled.div`

 > * {
    flex-grow: 1;
  }
{
  display: flex;
  justify-content:center;
  aling-items:center;


 .errroImage{
   max-width:500px;
   max-height:500px
 }

.errormessage{
   max-width:300px;

   button {
      border: none;
      padding: 0.4em 0.4em;
      border: none;
      border-radius: 0.5em;
      background: #333333;
   }

   a{
     color:white;
   }

   a:after{
     color:white;
   }
 }


}
`


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
    <ErrorStyle>
    
        <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="lady coder" className="errroImage"
       />   <div className="errormessage">
         <h1>Oops! ....</h1>
         <p> Looks like the Page  you are looking for can not be found!</p>
         <p><strong>Error code: 404</strong></p>
         <button><a href="/" > Go back Home </a></button>    
       </div>
       
    </ErrorStyle>
)
}

export default NotfoundPage;