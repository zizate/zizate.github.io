module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    pathPrefix: "/litus",
    title: `My Blog litus`,
    author: `litus`,
    description: `Velog`,
    social: [
      {
        name: `github`,
        url: `https://github.com/zizate`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
