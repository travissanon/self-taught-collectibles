import React from 'react'
import Link from 'gatsby-link'
import logo from '../pages/vector.svg'

const Header = ({ siteTitle }) => (
  <div>
    <header>
      <img src={logo}/>
      <nav>
        <Link to="/listing">Front End Development</Link>
        <Link to="/listing">Back End Development</Link>
        <Link to="/listing">Design</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  </div>
)

export default Header
