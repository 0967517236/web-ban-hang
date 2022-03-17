import React from 'react'
import PropTypes from 'prop-types'
import Topbar from '../../components/Admin/Topbar'
import Sidebar from '../../components/Admin/Sidebar'
import Footer from '../../components/Admin/Footer'





export default ({ children})=>{
    return(
        <section id="container">
       
          <Topbar/>
  
          {/*header end*/}
          {/*sidebar start*/}
        
            <Sidebar/>  
          {/*sidebar end*/}
          {/*main content start*/}
          <section id="main-content">
            {children}
            {/* footer */}
           <Footer/>
            {/* / footer */}
          </section>
          {/*main content end*/}
       
      </section>
    )
}
