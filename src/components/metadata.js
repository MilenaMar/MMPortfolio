import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Thumbnail from '../../static/thumbnail.png'

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
  return (
     <Helmet>
      <title>{`${metaTitle} | ${title}`}</title>
      <meta name="description" content={metaDescription} /> 
      <meta name="image"  content={Thumbnail}/>

      <meta property="og:url" content="https://www.milenamartinez.com/" />
      <meta property="og:image" content="https://www.milenamartinez.com/thumbnail.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content="https://www.milenamartinez.com/thumbnail.png" />
    </Helmet>
    
  )
}

export default Metadata