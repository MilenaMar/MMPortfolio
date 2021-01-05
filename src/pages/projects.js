import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
       fixed {
         ...GatsbyImageSharpFixed
       }
     }
   }
    }
  `)
  return (
    <Layout>
    <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
       style={{display:"block", margin:"0 auto"}}/>
      <h1>My Post</h1>
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
