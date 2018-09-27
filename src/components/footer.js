import React from 'react'

const Footer = ({ siteTitle }) => {
  let path = window.location.pathname;
  return (
    <div className="footer">
      <a href="https://twitter.com/devmaterial">Development by <span>Travis Sanon</span></a>
      <a href="/about" style={{ visibility: path === '/' ? 'visible' : 'hidden' }}>About</a>
      <a href="https://twitter.com/_micahcarroll">Design by <span>Micah Carroll</span></a>
    </div>
  )
}

export default Footer
