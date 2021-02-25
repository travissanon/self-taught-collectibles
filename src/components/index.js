import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Footer from '../components/footer'
import Header from '../components/header'

import '../layouts/index.css'
import '../layouts/styles/_main.scss'

const Layout = ({ children }) => (
  <div className="layout-wrapper">
    <Header />
    <div className="main">{children}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
