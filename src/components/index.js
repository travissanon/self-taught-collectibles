import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from "gatsby-image"

import '../layouts/index.css'
import '../layouts/styles/_main.scss'

const Layout = ({ children }) => (
  <div className="main">
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
