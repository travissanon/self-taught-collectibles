import React from 'react'
import Layout from "../components/index"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import logo from './vector.svg'

import Header from '../components/header'
import Footer from '../components/footer'

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

        allImageSharp {
          edges {
            node {
              ... on ImageSharp {
                fluid {
                  src
                  originalName
                }
              }
            }
          }
        }

        allPeopleJson {
          edges {
            node {
              id
              subCount
              name
              description
              image
              profession
            }
          }
        }
       }
     `}
    
    // let windowLocation = location.pathname.split("/").pop();
    render={data => (
      <Layout>
        <Header/>
        <div className="list-content__container">
          <div className="list-content__header">
            <h1>{data.site.siteMetadata.professionTitle[location.pathname.split("/").pop()]}</h1>
            <p className="body body--primary">{data.site.siteMetadata.professionDescription[location.pathname.split("/").pop()]}</p>
          </div>
          <People data={data} location={location.pathname.split("/").pop()}/>
        </div>
        <Footer/>
      </Layout>
    )}
  />
)

const People = ({ data, location }) => {
  let listOfPeople = [];
  { data.allPeopleJson.edges.map(({ node }, i) => {
    if (node.profession === location) {
      listOfPeople.push(<Person person={node} image={data.allImageSharp.edges.filter(selection => selection.node.fluid.originalName === node.image)} key={i}/>)
    }
  }) }
  return <div className="list-content__people">{listOfPeople}</div>
}

const Person = ({ person, image, key }) => {
  return (
    <div className="list-content__person" key={key}>
      <img src={image[0].node.fluid.src} />
      <p className="body body--secondary">Sub Count: {person.subCount}</p>
      <h2>{person.name}</h2>
      <p className="list-content__description">{person.description}</p>
    </div>
  );
}

export default SecondPage

// export const query = graphql`
//   query People {
//     site {
//       siteMetadata {
//         title
//         professionTitle {
//           development
//           design
//         }
//         professionDescription {
//           development
//           design
//         }
//       }
//     }

//     allPeopleJson {
//       edges {
//         node {
//           id
//           subCount
//           name
//           description
//           image
//           profession
//         }
//       }
//     }
//   }`