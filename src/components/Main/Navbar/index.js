import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = props => {
    return (
      <div className="navigation-agileits">
      <div className="container">
        <nav className="navbar navbar-default">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header nav_2">
            <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div> 
          <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
            <ul className="nav navbar-nav">
              <li className="active">
              <Link to='/' className="act">Home</Link>
                </li>	
              {/* Mega Menu */}
              <li><Link to='/category'>Products</Link>
              </li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    
    )
}

Navbar.propTypes = {

}

export default Navbar
