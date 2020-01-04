import React from 'react'
import { graphql } from 'gatsby';

import HeaderHooks from "../examples/Header-Hooks"
import HeaderStatic from "../examples/Header-Static"

export default ({ data: { site: { siteMetadata: { person } } } }) => {
  // console.log(person)
  const { name, age } = person
  return (
    <div>
      <HeaderHooks />
      <HeaderStatic />
      <span>name {name} age {age}</span>
    </div>

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
