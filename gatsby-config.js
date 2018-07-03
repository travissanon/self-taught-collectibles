module.exports = {
  siteMetadata: {
    title: 'Self Taught Collectables',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-json',
  ],
}
