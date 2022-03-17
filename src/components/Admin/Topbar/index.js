import React from 'react'
import PropTypes from 'prop-types'

const Topbar = props => {
  return (
    <div>
       <header className="header fixed-top clearfix">
          {/*logo start*/}
          <div className="brand">
            <a href="/" className="logo">
              Sky
        </a>
            <div className="sidebar-toggle-box">
              <div className="fa fa-bars" />
            </div>
          </div>
          {/*    &lt;!&ndash;logo end&ndash;&gt;*/}
          <div className="top-nav clearfix">
            {/*search & user info start*/}
            <ul className="nav pull-right top-menu">
            
              {/* user login dropdown start*/}
              {/* user login dropdown end */}
            </ul>
            {/*search & user info end*/}
          </div>
        </header>
        
    </div>
  )
}

Topbar.propTypes = {

}

export default Topbar
