/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  /* Your site config here */

  pathPrefix: "/iloveservers",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `I Love Servers`,
        short_name: `Finest Software Delivery`,
        description: `We develop software what brings smile to user faces.`,
        lang: `en`,
        icon: `static/logos/icon-fav.png`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`
      }
    },
    {
      resolve: `gatsby-plugin-offline`
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve("static/images")
      }
    }
  ]
}
