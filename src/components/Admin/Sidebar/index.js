import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const Sidebar = props => {
  return (
    <div>
      <aside>
        <div id="sidebar" className="nav-collapse">
          {/* sidebar menu start*/}
          <div className="leftside-navigation">
            <ul className="sidebar-menu" id="nav-accordion">

              <li>

                <Link to="/admin/">DashBoard
            </Link>
              </li>
              <li>

                <Link to="/admin/products">Sản phẩm
            </Link>
              </li>
              <li className="sub-menu">

             
                <Link to="/admin/category">Danh mục
            </Link>

              </li>

            </ul>
          </div>
          {/* sidebar menu end*/}
        </div>
      </aside>
    </div>
  )
}

Sidebar.propTypes = {

}

export default Sidebar
