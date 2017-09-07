import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../../scss/main.scss'
var profileImage = require('../images/sibin-profile.jpg');


const Header = () => (
  <header>
    <aside className="aside">
      <div className="profile-section">
        <div className="image-content">
          <img src={profileImage} alt="Sibin Xavier" className="img-fluid mb-2 clip-polygon"/>

        </div>
        <h3 className="text-center mb-4 text-w-700">Sibin Xavier</h3>
      </div>
      <div className="link-section">
        <ul className="main-external">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="http://blog.7chip.com" target="_blank">Blog</a>
          </li>
          <li>
            <a href="http://www.7chip.com" target="_blank">Company</a>
          </li>
          <li>
            <a href="http://sibin.7chip.com/contact" target="_blank">Contact</a>
          </li>
          <li>
            <a href="http://sibin7771.youtube.com" target="_blank">Youtube</a>
          </li>
          <li>
            <a href="http://sibin.7chip.com/portfolio" target="_blank">Portfolio</a>
          </li>
        </ul>
      </div>
      <div className="footer-section"></div>
    </aside>
  </header>
)

const MiniHeader = () => {
  return <nav></nav>
}


class Template extends React.Component {
  render(){
    const { children } = this.props
    return(
      <div>
        <Helmet
          title="Sibin Xavier: Freelace Frontend Developer"
          meta={[
            { name: 'description', content: `Personal Website to share my web development experience, Learnings, Mistakes, Frontend Development Tips, WordPress Tips,
    				Frontend Book, Personal guide and much more. Full details available on my blog blog.7chip.com` },
            { name: 'keywords', content: 'Frontend Developer, WordPress Developer, Laravel Developer, NodeJS developer, Angular JS Developer, React JS Developer, Vue JS Developer, Ember JS Developer' },
          ]}
        />
        <div className="wrapper">
        <Header />
        <div className="page">
        <MiniHeader/>
      <div className="content-start">
          {children()}
      </div>
        </div>
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func,
}
export default Template
