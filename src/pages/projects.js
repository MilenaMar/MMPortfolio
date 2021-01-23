import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Metadata from "../components/metadata"
import styled from "styled-components"
import Card from "../components/projectCard"

const ProjectStyles = styled.div`
   {
    h1 {
      text-align: center;
    }
    .projects {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .card {
      text-align: center;
      margin: 1rem;
      padding: 1rem;
      max-width: 350px;
      max-height: 600px;
      border-radius: 5px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

      .card-header {
        height: 330px;
        padding: 0;
      }
      h2 {
        text-align: center;
      }

      .project {
        object-fit: cover;
        border-radius: 5px;
      }
    }

    .body {
      padding-top: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 1.1rem;
        height: 60px;
      }
    }

    .project-information {
      display: flex;
      max-height: 50px;
      align-items: end;

      button {
        max-width: 100px;
        background-color: #333231;
        border: none;
        padding: 0.5em 0.5em;
        font-size: 1rem;
        border: 2px solid #ffffff;
        border-radius: 0.5em;
        color: white;
        transform-style: preserve-3d;
      }

      button:focus {
        outline: none;
      }
      button:hover {
        background: rgba(244, 103, 64, 0.8);
        cursor: pointer;
      }


      a {
        padding: 0.5rem;
      }

      img {
        max-width: 40px;
      }
    }

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 823px) {
      .projects {
        justify-content: center;
        aling-items: center;
      }
    }

    @media (max-width: 481px) {
      .project-information {
        div {
          padding-left: 0;
        }
      }
    }
    @media (max-width: 348px) {
      .card{
    .card-header {
       height:250px;
       padding:0;
    
     }
  }
  .project-information {
        div {
          img{
            max-width: 20px;
          }
        }
      }
  
      }

  }
`

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___number], order: [ASC] }
      ) {
        edges {
          node {
            frontmatter {
              description
              title
              deployment
              source
              tech
              image
            }
          }
        }
      }
      placeholderImage: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <ProjectStyles>
      <Metadata
        title="Projects"
        description="Page with all the projects I worked on"
      />
      <h1>My Latest Projects...</h1>
      <div className="projects">
        {data.allMarkdownRemark.edges.map(e => (
          <Card info={e} key={e.node.frontmatter.title} />
        ))}
      </div>
    </ProjectStyles>
  )
}

export default ProjectsPage
