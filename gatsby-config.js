module.exports = {
  siteMetadata: {
    title: 'Self Taught Collectables',
    professionTitle: {
      development: 'Development',
      design: 'Design',
    },
    professionDescription: {
      development: 'This section derives of majority anyone who\'s really spreading the knowledge of your front-end section of a website. So expect a lot of HTML, CSS, Javascript like tutorials.',
      design: 'This section derives of designers that dive into deep design concepts as well as tangible tutorials for you to complete.',
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
