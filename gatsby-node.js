/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPeopleJson {
          edges {
            node {
              id
              subCount
              description
              image
              profession
            }
          }
        }
      }
    `
  ).then(result => {
    let professions = [];
    result.data.allPeopleJson.edges.forEach(({ node }) => {
      if (!professions.includes(node.profession)) {
        professions.push(node.profession);
      }
    })
    professions.forEach((profession) => {
      createPage({
        path: `listing/${profession}`,
        component: path.resolve(`./src/templates/secondPage.js`),
        context: {
          listing: profession
        },
      })
    })
    resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
};
