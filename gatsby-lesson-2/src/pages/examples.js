import React from 'react'
import { graphql } from 'gatsby';
import Layout from "../components/Layout"

import HeaderHooks from "../examples/Header-Hooks"
import HeaderStatic from "../examples/Header-Static"

export default ({ data: { site: { siteMetadata: { person } } } }) => {
  // console.log(person)
  const { name, age } = person
  return (
    <Layout>
      <HeaderHooks />
      <HeaderStatic />
      <span>name {name} age {age}</span>
    </Layout>

  )
}

export const getData = graphql`
  query{
    site {
      siteMetadata {
        person:data {
          name
          age
        }
      }
    }
  }
`
