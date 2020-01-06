import React from 'react'
import { graphql } from "gatsby"
import Tours from "../components/Tours/"
import Layout from "../components/Layout"

export default ({ data }) => {
  // data prop contains the result of the page query
  return (
    <Layout>
      {/* passing in the page query results to the tours component to render */}
      <Tours tours={data.tours.edges} />
    </Layout>
  )
}


export const getTours = graphql`
query ToursQuery {
	tours: allContentfulTour {
    edges {
      node {
        contentful_id
        slug
        name
        price
        country
        days
        images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      }
    }
  }
}
`
