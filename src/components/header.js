import React, { Component } from 'react'
import { Link } from "gatsby"
import logo from '../pages/vector.svg'

class Header extends Component {
  constructor({ siteTitle }) {
    super({ siteTitle });
    this.state = { showMenu: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    const menu = (
      <div className="nav nav-mobile">
        <p onClick={this.handleClick}>X</p>
        <Link to="/listing/development">Development</Link>
        <Link to="/listing/design">Design</Link>
        <Link to="/about">About</Link>
      </div>
    );

    return (
      <div>
        <header>
          <Link to="/" className={logo}>
            <img src={logo}/>
          </Link>
          <div className="nav nav-desktop">
            <Link to="/listing/development">Development</Link>
            <Link to="/listing/design">Design</Link>
            <Link to="/about">About</Link>
          </div>
          <p className="nav-toggle" onClick={this.handleClick}>Menu</p>
          {this.state.showMenu ? menu : ''}
        </header>
      </div>
    )
  }
}

const Test = (
  <div>
    <h1>Ayy</h1>
  </div>
)

export default Header
