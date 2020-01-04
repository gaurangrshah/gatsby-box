import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'

// const getImages = graphql`
//   {
//     allFile {
//       images: edges {
//         image: node {
//           id
//           relativePath
//         }
//       }
//     }
//   }
// `

export default () => {
  // const { allFile: { images } } = useStaticQuery(getImages)
  console.log(images)
  return (
    <Layout>
      images here
      {/* {images.map((image, i) => <img key={image.image.id} src={`./images/${image.image.relativePath}`} />)} */}
    </Layout>
  )
}
