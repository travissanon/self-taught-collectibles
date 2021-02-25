import React from 'react'

class Footer extends React.Component {
  constructor({ siteTitle }) {
    super({ siteTitle })

    this.state = {
      path: '',
    }
  }

  componentDidMount() {
    this.setState({
      path: window.location.pathname,
    })
  }

  render() {
    return (
      <div className={`footer ${this.props.class ? this.props.class : ''}`}>
        <a href="https://twitter.com/devmaterial">
          Development by <span>Travis Sanon</span>
        </a>
        <a
          href="/about"
          style={{ visibility: this.state.path === '/' ? 'visible' : 'hidden' }}
        >
          About
        </a>
        <a href="https://twitter.com/_micahcarroll">
          Design by <span>Micah Carroll</span>
        </a>
      </div>
    )
  }
}

export default Footer
