import React from 'react'
import { StaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query SiteDescription {
    site {
      siteMetadata {
       description
      }
    }
  }
`

export default () => {

  return (
    // <StaticQuery query={getData} render={(data) => {
    <StaticQuery query={getData} render={({ site: { siteMetadata } }) => {
      const { description } = siteMetadata
      // console.log('static', description)
      return (
        <div>
          <p>description:{description}</p>
        </div>
      )
    }}>

    </StaticQuery>
  )
}
