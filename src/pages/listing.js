import React from 'react'
import Layout from "../components/index"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Helmet from 'react-helmet'
import logo from './vector.svg'

import Header from '../components/header'
import Divider from '../components/divider'

export default class ProductList extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Products</h1>
        {
          this.props.data.allPeople.edges.map((edge, index) => {
            const product = edge.node
            return (
              <Link key={product.id} to={`/listing/${product.profession}`}>
                <div>{product.name}</div>
              </Link>
            )
          })
        }
      </Layout>
    );
  }
}

// export const query = graphql`
//   query test {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allPeopleJson {
//       edges {
//         node {
//           id
//           subCount
//           description
//           image
//           profession
//         }
//       }
//     }
//   }
// `