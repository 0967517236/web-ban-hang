import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import apiAbout from '../../../../api/aboutApiHttp'

const About = ({ abouts }) => {

    const [about, setAbout] = useState([]);
    useEffect(() => {
        const getAbout = async () => {
            try {
                const {data} = await apiAbout.getAll();
                console.log(data)
                setAbout(data)  
            } catch (error) {
                console.log("fail to request API", error)
            }
        }
        getAbout()
    }, {})
    return (
        <div>
            <div className="about">
                <div className="container">
                    <h3 className="w3_agile_header">About Us</h3>
                  {about.map((ab,index)=>(
                        <div className="about-agileinfo w3layouts">
                        <div className="col-md-8 about-wthree-grids grid-top">
                            <h4>{ab.tittle} </h4>
                            <p className="top">{ab.content1}</p>

                            <p>{ab.content2}</p>
                            <div className="about-w3agilerow">
                                <div className="col-md-4 about-w3imgs">
                                    <img src="images/p3.jpg" alt="" className="img-responsive zoom-img" />
                                </div>
                                <div className="col-md-4 about-w3imgs">
                                    <img src="images/p4.jpg" alt="" className="img-responsive zoom-img" />
                                </div>
                                <div className="col-md-4 about-w3imgs">
                                    <img src="images/p3.jpg" alt="" className="img-responsive zoom-img" />
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="col-md-4 about-wthree-grids">
                            <div className="offic-time">
                                <div className="time-top">
                                    <h4>Praesentium :</h4>
                                </div>
                                <div className="time-bottom">
                                    <h5>At vero eos </h5>
                                    <h5>Accusamus et</h5>
                                    <p>Dignissimos at vero eos et accusamus et iusto odio ducimus qui accusamus et. </p>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                  ))}
                </div>
            </div>

        </div>
    )
}

About.propTypes = {

}

export default About
