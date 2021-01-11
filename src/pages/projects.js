import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
//import Img from "gatsby-image"
import Metadata from "../components/metadata"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
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
      <ol>
        {data.allMarkdownRemark.edges.map(e => (
          <li key={e.node.fields.slug}>
            <Link to={`/blog/${e.node.fields.slug}`}>
              <h2>{e.node.frontmatter.title}</h2>
            </Link>
            <p>{e.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default ProjectsPage
