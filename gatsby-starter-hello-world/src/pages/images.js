import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import img from "../images/sea-stones.jpeg"
import Image from 'gatsby-image'

import Layout from '../components/Layout'

const getImages = graphql`
  {
  fixed: file(relativePath: {eq: "sea-stones.jpeg"}){
    childImageSharp {
      fixed(width: 200, grayscale: true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "compass-map.jpeg"}){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  fluidMax: file(relativePath: {eq: "compass-map.jpeg"}){
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

}
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <Wrapper>
      <article>
        <h3>basic image/relativeImport</h3>
        <img src={img} className="basic" />
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          <Image fluid={data.fluidMax.childImageSharp.fluid} />
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
      text-align: center;
      text-transform: capitalize;
      width: 80vw;
      margin: 0 auto 10rem auto;
  article {
        border: 3px solid red;
      padding: 1rem 0;
    .basic {
        width: 100%;
    }
    .small {
      width: 200px;
    }
  }
  @media(min-width: 992px) {
        display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 1rem;
    }
  `

export default Images
