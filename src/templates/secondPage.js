import React from 'react'
import Layout from '../components/index'
import { StaticQuery, graphql } from 'gatsby'

import Divider from '../components/divider'

const capitalizeString = str => str.charAt(0).toUpperCase() + str.slice(1)

const SecondPage = ({ location }) => (
  <StaticQuery
    query={graphql`
      query People {
        site {
          siteMetadata {
            title
            professionTitle {
              development
              design
            }
            professionDescription {
              development
              design
            }
          }
        }

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
    `}
    render={data => (
      <Layout>
        <div className="list-content">
          <div className="list-content__container">
            <div className="list-content__header">
              <h1>
                {capitalizeString(
                  data.site.siteMetadata.professionTitle[
                    location.pathname.split('/').pop()
                  ]
                )}
              </h1>
              {console.log(
                data.site.siteMetadata.professionTitle[
                  location.pathname.split('/').pop()
                ]
              )}
              <p className="body body--primary">
                {
                  data.site.siteMetadata.professionDescription[
                    location.pathname.split('/').pop()
                  ]
                }
              </p>
            </div>
            <Divider />
            <People data={data} location={location.pathname.split('/').pop()} />
          </div>
        </div>
      </Layout>
    )}
  />
)

const People = ({ data, location }) => {
  let creators = []

  data.allCreators.nodes.map((node, i) => {
    const data = node.data.items[0]
    if (node.profession === location) {
      creators.push(
        <Person
          title={data.snippet.title}
          description={data.snippet.description}
          url={data.snippet.customUrl}
          image={data.snippet.thumbnails.high.url}
          subCount={data.statistics.subscriberCount}
          key={i}
        />
      )
    }
  })

  return <div className="list-content__people">{creators}</div>
}

const Person = ({ title, description, url, image, subCount, key }) => {
  return (
    <div className="list-content__person" key={key}>
      <a href={url}>
        <img src={image} />
      </a>
      <p className="body body--secondary">Sub Count: {subCount}</p>
      <h2>{title}</h2>
      <p className="list-content__description">{`${description.substring(
        0,
        150
      )}...`}</p>
    </div>
  )
}

export default SecondPage
