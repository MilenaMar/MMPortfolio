import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import projectImg from "../../static/holder.png"
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
        <header className={projectsStyles.container}>
             <Link to={`/blog/${e.node.fields.slug}`}>
              <h2>{e.node.frontmatter.title}</h2>
            </Link>
        </header>
        <img src={projectImg} alt="Hot air balloons"/>
        <div className={projectsStyles.body}>
          <p>{e.node.frontmatter.description}</p>
          <p>{e.node.frontmatter.tech}</p>
        </div>
        <footer><a href={e.node.frontmatter.source} target="_blank"
          rel="noreferrer">Source Code</a> <a href={e.node.frontmatter.deployment} target="_blank"
          rel="noreferrer">deployment</a></footer>
    </div>
        ))}
      </div>
    </Layout>
  )
}

export default ProjectsPage
