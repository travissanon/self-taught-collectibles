import React from 'react'
import Link from 'gatsby-link'
import logo from './../pages/vector.svg'

const Header = ({ siteTitle }) => (
  <div>
    <header>
      <img src={logo}/>
      <nav>
        <Link to="/">Back End Development</Link>
        <Link to="/">Design</Link>
      </nav>
    </header>
  </div>
)

export default Header
