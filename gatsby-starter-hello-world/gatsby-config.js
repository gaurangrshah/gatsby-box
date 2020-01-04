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
    data: { name: "john", age: 26 }
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`]
}
