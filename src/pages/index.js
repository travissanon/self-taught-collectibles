import React from 'react'
import Layout from '../components/index'
import { Link } from 'gatsby'
import logo from './vector.svg'

import Divider from '../components/divider'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <div className="home-content">
      <div className="home-content__container">
        <img src={logo} />
        <h1>Self Taught Collectibles</h1>
        <p>
          After years and years of favoriting and bookmarking youtubers I
          figured it was a matter of time before we created a archive of some of
          the highest quality content creators out there for both development
          and design.
        </p>
        <Divider />
        <Link to="/development">Development</Link>
        <Link to="/design">Design</Link>
      </div>
      <Footer />
    </div>
  </Layout>
)

export default IndexPage
