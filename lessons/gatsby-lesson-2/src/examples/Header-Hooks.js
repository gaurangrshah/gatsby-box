import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
{
  site {
    siteMetadata {
      author
      title
    }
  }
}
`

export default () => {
  // const data = useStaticQuery(graphql`
  // const { site: { siteMetadata } } = useStaticQuery(graphql`
  // const { site: { siteMetadata: { author, title, data: info } } } = useStaticQuery(getData)
  const { site: { siteMetadata: { author, title } } } = useStaticQuery(getData)

  // const { author, title, data: info } = siteMetadata

  // console.log('hook', author, title, info)

  return (
    <div>
      <h1>Title: {title}</h1>
      <h2>author:{author}</h2>
    </div>
  )
}
