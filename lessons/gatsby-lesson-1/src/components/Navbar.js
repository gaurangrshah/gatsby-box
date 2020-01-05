import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { toUpper } from "../utils";

// import styles from "./navbar.module.scss"

const getNavItems = graphql`
{
  site {
    siteMetadata {
      title
      description
      pages
      adtlLinks {
        id
        title
        url
      }
    }
  }
}
`

export default () => {
  const { site: { siteMetadata: { title, description, pages, adtlLinks } } } = useStaticQuery(getNavItems)

  return (
    <nav>
      <h2>{title}</h2>
      <ul>
        {pages.length ? pages.map((page, i) => <li key={i}><Link to={`/${page}/`}>{toUpper(page)}</Link></li>) : ""}
        {adtlLinks.length ? adtlLinks.map(url => <li key={url.id}><Link to={url.url} target="_blank" rel="noopener noreferrer">{toUpper(url.title)}</Link></li>) : ""}
      </ul>
      <small>{description}</small>
    </nav>
  )
}
