import React from 'react'
import Layout from '../components/index'
import Helmet from 'react-helmet'
import logo from './vector.svg'

import Header from '../components/header'
import Footer from '../components/footer'

const ThirdPage = () => {
  return (
    <Layout>
      <div className="about-container">
        <div className="about-block">
          <h1 className="about-block__title header header--primary">
            About Us
          </h1>
          <p className="about-block__paragraph body body--primary">
            Self Taught Collectibles is currenly a living resource pool for
            creatives, hobbiest, and many more that are interested in learning
            from thought leaders within the design and development industry.
          </p>
          <p className="about-block__paragraph body body--primary">
            <span>Travis Sanon</span> is a currently working within (put company
            travis) and (etc however you want to describe yourself).
          </p>
          <p className="about-block__paragraph body body--primary">
            <span>Micah Carroll</span> spends time designing to help fuel up on
            self help books, anime, and more Nintendo Switch games. Constantly
            experimenting with product design, front end development, and social
            media growth strategies. Currently working at Ring protecting the
            neighborhoods daily.
          </p>
        </div>
        <div className="about-block">
          <h1 className="about-block__title header header--primary">Credits</h1>
          <p className="about-block__paragraph body body--primary">
            These are just some people we’d like to give credit to helping us
            build out this resource and we are forever grateful.
          </p>
          <ul className="about-block__list body body--primary">
            <li>Hunter Keca - developer resource</li>
            <li>Spencer Marsh - designer resource</li>
            <li>Trisha Happy - designer resource</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default ThirdPage
