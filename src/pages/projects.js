import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import projectImg from "../../static/holder.png"
import deploymentIcon from "../../static/deploy.png"
import sourceIcon from "../../static/github.png"
import projectsStyles from "../styles/projects.module.scss"

//import Img from "gatsby-image"
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
              sourceServer
              tech
            }
            fields {
              slug
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

 // <Img
 // fluid={data.placeholderImage.childImageSharp.fluid}
 // alt="lady projects"
 //style={{display:"block", margin:"0 auto"}}/>
  return (
    <Layout>
    <Metadata title="Projects" description="Page with all the projects I worked on"/>
      <h1>My Latest Projects</h1>
      <div className={projectsStyles.container}>
        {data.allMarkdownRemark.edges.map(e => (
        <div className={projectsStyles.card} key={e.node.fields.slug}>
        <header>
             <Link to={`/blog/${e.node.fields.slug}`}>
              <h2>{e.node.frontmatter.title}</h2>
            </Link>
        </header>
        <div className={projectsStyles.projectContainer}><img src={projectImg} className={projectsStyles.project}alt="Hot air balloons"/></div>
        <div className={projectsStyles.body}>
          <h5>{e.node.frontmatter.description}</h5>
          <div>
          <p>{e.node.frontmatter.tech}.</p>
        <a href={e.node.frontmatter.source} target="_blank"
          rel="noreferrer"><img src={sourceIcon} alt="github"></img></a> <a href={e.node.frontmatter.deployment} target="_blank"
          rel="noreferrer"><img src={deploymentIcon} alt="deploy page"></img></a>
          </div>
          </div>
    </div>
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsPage
