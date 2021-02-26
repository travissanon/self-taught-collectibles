const path = require('path')
const fetch = require('node-fetch')
const creators = require('./src/data/creators.json')

const getChannelData = data => {
  const API_KEY = process.env.GOOGLE_API_KEY
  const paramApiKey = API_KEY ? `key=${API_KEY}` : null
  const paramFilter = data.id
    ? `id=${data.id}`
    : data.name
      ? `forUsername=${data.name}`
      : null
  const apiDomain = `https://youtube.googleapis.com/youtube/v3`
  const channelDataPath = `/channels?part=snippet%2CcontentDetails%2Cstatistics`

  if (paramApiKey && paramFilter) {
    const apiData = fetch(
      `${apiDomain}${channelDataPath}&${paramFilter}&${paramApiKey}`
    )
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.error(err))
    return apiData
  } else {
    return console.error('No api key or filter was provided')
  }
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const developerChannelData = creators.development.map(data =>
    getChannelData(data)
  )
  const designerChannelData = creators.design.map(data => getChannelData(data))

  await Promise.all(developerChannelData).then(data =>
    data.forEach(val => {
      const node = {
        id: createNodeId(`developer-${Math.random()}`),
        profession: 'development',
        data: val,
        internal: {
          type: 'Creators',
          contentDigest: createContentDigest(val),
        },
      }
      actions.createNode(node)
    })
  )

  await Promise.all(designerChannelData).then(data =>
    data.forEach(val => {
      const node = {
        id: createNodeId(`designer-${Math.random()}`),
        profession: 'design',
        data: val,
        internal: {
          type: 'Creators',
          contentDigest: createContentDigest(val),
        },
      }
      actions.createNode(node)
    })
  )
}

exports.createPages = ({ graphql, actions, getCache }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allCreators {
          nodes {
            id
            profession
            data {
              items {
                id
                snippet {
                  title
                  description
                  customUrl
                  thumbnails {
                    high {
                      url
                      width
                      height
                    }
                  }
                }
                statistics {
                  subscriberCount
                }
              }
            }
          }
        }
      }
    `).then(result => {
      let professions = []

      result.data.allCreators.nodes.forEach(node => {
        if (!professions.includes(node.profession)) {
          professions.push(node.profession)
        }
      })

      professions.forEach(profession => {
        createPage({
          path: `/${profession}`,
          component: path.resolve(`./src/templates/secondPage.js`),
          context: {
            listing: profession,
          },
        })
      })

      resolve()
    })
  }).catch(error => {
    console.error(error)
    reject()
  })
}
