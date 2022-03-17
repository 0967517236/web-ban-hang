import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  return (
   
    <div>
    <div className="agileits_header">
      <div className="container">
        <div className="w3l_offers">
          <p>SALE UP TO 70% OFF. USE CODE "SALE70%" . <a href="products.html">SHOP NOW</a></p>
        </div>
        <div className="agile-login">
          <ul>
            <li><a href="registered.html"> Create Account </a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="contact.html">Help</a></li>
          </ul>
        </div>
        <div className="product_list_header">  
          <form action="#" method="post" className="last"> 
            <input type="hidden" name="cmd" defaultValue="_cart" />
            <input type="hidden" name="display" defaultValue={1} />
            <button className="w3view-cart" type="submit" name="submit" value><i className="fa fa-cart-arrow-down" aria-hidden="true" /></button>
          </form>  
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
    <div className="logo_products">
      <div className="container">
        <div className="w3ls_logo_products_left1">
          <ul className="phone_email">
            <li><i className="fa fa-phone" aria-hidden="true" />Order online or call us : (+0123) 234 567</li>
          </ul>
        </div>
        <div className="w3ls_logo_products_left">
          <h1><a href="index.html">super Market</a></h1>
        </div>
        <div className="w3l_search">
          <form action="#" method="post">
            <input type="search" name="Search" placeholder="Search for a Product..." required />
            <button type="submit" className="btn btn-default search" aria-label="Left Align">
              <i className="fa fa-search" aria-hidden="true"> </i>
            </button>
            <div className="clearfix" />
          </form>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  

  )
}

Header.propTypes = {

}

export default Header
