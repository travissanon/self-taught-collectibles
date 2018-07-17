import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from './vector.svg'

import Header from '../components/header'
import Divider from '../components/divider'

export default class ProductList extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export const query = graphql`
  query test {
    site {
      siteMetadata {
        title
      }
    }
    allPeople {
      edges {
        node {
          id
          name
          description
          subCount
          profession
          image
        }
      }
    }
  }
`