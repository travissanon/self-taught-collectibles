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
              website
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
        path: `/${profession}`,
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
