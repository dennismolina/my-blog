require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `My Blog`,
    description: `A simple blog built with Gatsby, React, Contentful, and Cloudflare Pages.`,
    author: `Dennis Molina`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
  ],
};
