import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => {
  let path = window.location.pathname;
  return (
    <footer>
    <a href="https://twitter.com/devmaterial">Development by <span>Travis Sanon</span></a>
    <a className="center" href="/about" style={{ visibility: path === '/' ? 'visible' : 'hidden' }}>About</a>
    <a className="right" href="https://twitter.com/_micahcarroll">Design by <span>Micah Carroll</span></a>
  </footer>
  )
}

export default Footer
