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
     <meta name="description" content={metaDescription} /> 
      <meta name="image"  content={Thumbnail}/>
      <meta property="og:url" content="https://www.milenamartinez.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.milenamartinez.com/thumbnail.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content="https://www.milenamartinez.com/thumbnail.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:image:src" content={Thumbnail} />
      <html lang="en" dir="ltr" />
      <title>{`${metaTitle} | ${title}`}</title>
    </Helmet>
    
  )
}

export default Metadata