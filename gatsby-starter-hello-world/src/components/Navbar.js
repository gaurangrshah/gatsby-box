import React from 'react'
import { Link } from "gatsby"
// import styles from "./navbar.module.scss"

export default () => {
  return (
    <nav>
      <h2>Company Name</h2>
      <ul>
        <li>
          <Link to="/">home page</Link>
        </li>
        <li>
          <Link to="/blog/">blog page</Link>
        </li>
        <li>
          <Link to="/about/">about page</Link>
        </li>
        <li>
          <Link to="/products/">products page</Link>
        </li>
        <li>
          <Link to="/examples/">examples</Link>
        </li>
        <li>
          <Link to="/404/">404 page</Link>
        </li>
        <li>
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">gatsby page</a>
        </li>
      </ul>
    </nav>
  )
}
