import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import deploymentIcon from "../../static/deploy.png"
import sourceIcon from "../../static/github.png"
import projectsStyles from "../styles/projects.module.scss"
import Metadata from "../components/metadata"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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
    <div>
    <Metadata title="Projects" description="Page with all the projects I worked on"/>
      <h1>My Latest Projects</h1>
      <div className={projectsStyles.container}>
        {data.allMarkdownRemark.edges.map(e => (
        <div className={projectsStyles.card} key={e.node.frontmatter.title}>
              <h2>{e.node.frontmatter.title}</h2>
        <div className={projectsStyles.body}>
          <h5>{e.node.frontmatter.description}</h5>
          <div>
          <p>{e.node.frontmatter.tech}.</p>
        <a href={e.node.frontmatter.source} target="_blank"
          rel="noreferrer"><img src={sourceIcon} alt="github"></img></a> 
          <a href={e.node.frontmatter.deployment} target="_blank"
          rel="noreferrer"><img src={deploymentIcon} alt="deploy page"></img></a>
          </div>
          </div>
          <div className={projectsStyles.projectContainer}>
        <img src={e.node.frontmatter.image} className={projectsStyles.project}alt="project"/>
        </div>
    </div>
        ))}
      </div>
      </div>
  )
}

export default ProjectsPage;
