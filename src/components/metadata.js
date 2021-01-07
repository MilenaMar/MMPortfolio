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
          }
        }
      }
    `
  )
  const metaTitle =  data.site.siteMetadata.author
  const metaDescription = description 
  return (
    <Helmet>
      <title>{`${metaTitle} | ${title}`}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  )
}

export default Metadata