import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Metadata = ({ title, description }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            title
            description
            url
            image
          }
        }
      }
    `
  )
  const metaTitle =  data.site.siteMetadata.author
  const metaDescription = description 
  const image = `${data.site.siteMetadata.url}${data.site.siteMetadata.image}`
  return (
     <Helmet>
      <title>{`${metaTitle} | ${title}`}</title>
      <meta name="description" content={metaDescription} /> 
      <meta name="image"  content={image}/>
    </Helmet>
    
  )
}

export default Metadata