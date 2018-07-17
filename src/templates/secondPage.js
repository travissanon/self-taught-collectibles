import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
// import logo from './vector.svg'

import Header from '../components/header'
import Divider from '../components/divider'

const SecondPage = ({ data }) => {
  return (
      <div>
      <Header/>
        <div className="list-content__container">
          <div className="list-content__header">
            <h1>Front End Development</h1>
            <p className="body body--primary">This section derives of majority anyone who's really spreading the knowledge of your front-end section of a website. So expect a lot of <span>HTML, CSS, Javascript</span> like tutorials.</p>
          </div>
          <People data={data}/>
        </div>
      </div>
  );
}

class People extends React.Component {
  render() {
    let listOfPeople = [];
    { this.props.data.allPeople.edges.map(({ node }, i) => {
      listOfPeople.push(<Person person={node} key={i}/>)
    }) }
    return <div className="list-content__people">{listOfPeople}</div>
  }
}

const Person = ({ person, key }) => {
  return (
    <div className="list-content__person">
      <img src={person.image}/>
      <p className="body body--secondary">Sub Count: {person.subCount}</p>
      <h2>{person.name}</h2>
      <p className="list-content__description">{person.description}</p>
    </div>
  );
}

export default SecondPage

export const query = graphql`
  query people($listing: String!) {
    allPeople(
      filter: { profession: { eq: $listing } } 
    ) {
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