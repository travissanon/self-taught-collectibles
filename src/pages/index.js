import React from 'react'
import Link from 'gatsby-link'
import logo from './vector.svg'

import Divider from '../components/divider.js';

const IndexPage = () => (
  <div className="home-content__container">
    <img src={logo}/>
    <h1>Self Taught Collectibles</h1>
    <p>
      After years and years of favoriting and bookmarking youtubers 
      I figured it was a matter of time before we created a archive of 
      some of the highest quality content creators out there 
      for both development and design.
    </p>
    <Divider/>
    <Link to="/page-2/">Front End Development</Link>
    <Link to="/page-2/">Back End Development</Link>
    <Link to="/page-2/">Design</Link>
  </div>
)

export default IndexPage
