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
        <Link to="/listing/frontend">Front End Development</Link>
        <Link to="/listing/backend">Back End Development</Link>
        <Link to="/listing/design">Design</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  </div>
)

const Test = (
  <div>
    <h1>Ayy</h1>
  </div>
)

export default Header
