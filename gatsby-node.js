/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const algoliasearch = require('algoliasearch');
const crypto = require('crypto');
const path = require('path');

require('dotenv').config()

const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX = process.env.ALGOLIA_INDEX;
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;

const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const algoliaIndex = algoliaClient.initIndex(ALGOLIA_INDEX);

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  return new Promise((resolve, reject) => {
    algoliaIndex.search({
      query: '', //fetch all
      hitsPerPage: 1000
      },
      function searchDone(err, content) {
        if (err) {
          console.log('\nError');
          console.log(err);
          reject();
        } else {
          content.hits.forEach(content => {
            const productNode =  {
              id: content.objectID,
              parent: null,
              children: [],
              internal: {
                type: `People`,
                contentDigest: crypto
                  .createHash(`md5`)
                  .update(JSON.stringify(content))
                  .digest(`hex`),
              },
              name: content.name,
              description: content.description,
              subCount: content.subCount,
              profession: content.profession,
              image: content.image,
            }
            createNode(productNode);
          });
          resolve();
        }
      }
    );
  });
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPeople {
          edges {
            node {
              profession
            }
          }
        }
      }
    `
  ).then(result => {
    let professions = [];
    result.data.allPeople.edges.forEach(({ node }) => {
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
