import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Metadata from "../components/metadata"
import Skills from "../components/skills"
import  styled from "styled-components";

const AboutStyle = styled.div`
{
  display: flex;
  justify-content: center;
  align-items: center;

  div:first-child {
    min-width: 400px;
    max-width: 500px;
  }

  .about-me {
    color: #333231;
    padding: 1rem 1rem 0 1rem;
    margin: 1rem;
    max-width: 800px;
    height: 90%;
    text-align: justify;
    border: 2px solid #eee;
    border-radius: 20px;

    a {
      display: inline-block;
      color: rgba(244,103,64,0.8);
      transition: all 0.2s ease-in-out;
    }

    a:hover {
      font-weight: 5rem;
      transform: scale(1.1);
    }
  }

  @media (max-width: 828px) {
  
  flex-direction: column;

  div:first-child {
    min-width: 5px;
    max-width: 5px;
    visibility: hidden;
  }
}

}

`


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
    <AboutStyle>
    <Metadata title="About" description="A website about who I am"/>
    <div>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="about me" /> 
    </div>
    <div className="about-me">
    <h1>Hi there . . . </h1>
      <p>
        I am a Full-Stack Web Developer currently living in Ireland.<br/>
         Experienced with the MERN stack ( MongoDb, Express, React, Node), at the moment I am developing projects with Gatsby and  Typescript. <br/>
        <br/> I am always learning, practicing and researching new things. I believe you should
    never go to bed without learning something new.
       The two things I love the most besides coding are my dog and Colombian coffee.</p>
      <p> If you want to work wit me go ahead and <Link to="/contact">Contact me</Link>.  <br/> 
        You can also can find me on <a href="https://www.linkedin.com/in/milena-martinez-caceres/" 
             target="_blank" rel="noreferrer"> 
             LinkedIn
             </a> and check other projects on my <a href="https://github.com/MilenaMar"
                 target="_blank" rel="noreferrer">GitHub</a> page.
          </p>   
          <Skills/> 
      </div> 
      </AboutStyle>
  )
}

export default AboutPage;
