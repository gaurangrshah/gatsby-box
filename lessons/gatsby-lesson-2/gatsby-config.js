require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "App Title",
    description: "App Description Area Here..",
    author: "@thisguy",
    data: { name: "john", age: 26 },
    pages: ['home', 'blog', 'products', 'examples', '404', 'images', 'tours'],
    adtlLinks: [{ id: 1, title: 'gatsby docs', url: 'https://www.gatsbyjs.org' }]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // name: `pages`,
        // path: `${__dirname}/src/pages/`,
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ]
}
