const path = require('path');

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions; // destructure the createPages() from actions
  // const response = await graphql(`query SlugQuery {
  // using graphql as a function (in node.js)
  const { data } = await graphql(`query SlugQuery {
    tours: allContentfulTour {
      edges {
        node {
          slug
        }
      }
    }
  }
  `)
  data.tours.edges.forEach(({ node }) => {
    // loop thru each node which references each {tour}
    createPage({
      // createPage takes in an object, with the following properties:
      path: `tours/${node.slug}`, // define each page's path
      component: path.resolve('./src/templates/tour-template.js'), // location of page template
      context: {

        slug: node.slug
      }
    })
  })
}
