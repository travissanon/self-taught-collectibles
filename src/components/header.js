import React from 'react'
import Link from 'gatsby-link'
import logo from '../pages/vector.svg'

const Header = ({ siteTitle }) => (
  <div>
    <header>
      <Link to="/" className={logo}>
        <img src={logo}/>
      </Link>
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
