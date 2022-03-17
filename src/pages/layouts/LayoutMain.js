import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Main/Header'
import Navbar from '../../components/Main/Navbar'
import Footer from '../../components/Main/Footer'


export default ({ children }) => {
    return (

        <div>
            <Header />
            <Navbar/>
            <main class="ps-container">
            {children}
           
            <Footer/>
    </main>

          

        </div>

    )
}

