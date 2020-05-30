module.exports = {
  siteMetadata: {
    title: `Rotem Petranker`,
    description: `This is Rotem Petranker's `,
    author: `@gatsbyjs`,
    menuLinks: [
      { name: "home", link: "/" },
      { name: "academical background", link: "/academia" },
      { name: "speaking", link: "speaking" },
      { name: "consulting", link: "/consulting" },
      { name: "media", link: "/media" },
      { name: "about", link: "/about" },
      { name: "contact", link: "contact" },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
